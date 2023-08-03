import { useState } from "react";
import {validateEmail, validatePassword, validateUsername } from "../validation/Validation"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const useRegisterForm = (callback) => {
	const navigate=useNavigate()
  const [inputs, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting,    setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      const isValid = validateEmail(value);
      setErrors((prev) => ({
        ...prev,
        email: isValid ? '' : 'Email is invalid',
      }));
    }
    if (name === 'username') {
      const isValid = validateUsername(value);
      setErrors((prev) => ({
        ...prev,
        username: isValid ? '' : 'Username is required',
      }));
    }
    if (name === 'password') {
      const isValid = validatePassword(value);
      setErrors((prev) => ({
        ...prev,
        password: isValid
          ? ''
          : 'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character',
      }));
    }
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const noErrors = Object.values(errors).every((error) => !error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputs.email==="" || inputs.password===""){
      alert("Please fill in all required fields.")
    return;
  }
    if (noErrors) {
      try {
        await axios.post('http://localhost:4000/backend/auth/reg', inputs);
        navigate('/Login');
      } catch (err) {
        console.log(err);
      }
    } else {
      setSubmitted(true);
    }
  };
  return {
    inputs,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useRegisterForm;