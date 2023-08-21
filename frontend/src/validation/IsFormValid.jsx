
import { useState, useEffect } from "react";
import { validateEmail, validatePassword, validateUsername } from "../validation/Validation";
import { useNavigate ,useLocation} from "react-router-dom";
import axios from "axios";

const useRegisterForm = (callback) => {
  const navigate = useNavigate();
  const state=useLocation().state
  //console.log(state)
  //   const [value,setValue]=useState(state?.descr || "")
  const [inputs, setInput] = useState({
    username: state?.username || "",
    email: state?.email || "",
    password: state?.password || "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitted] = useState(false);

  useEffect(() => {
    if (state) {
      setInput(state);
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const isValid = validateEmail(value);
      setErrors((prev) => ({
        ...prev,
        email: isValid ? "" : "Email is invalid",
      }));
    }
    if (name === "username") {
      const isValid = validateUsername(value);
      setErrors((prev) => ({
        ...prev,
        username: isValid ? "" : "Username is required",
      }));
    }
    if (name === "password") {
      const isValid = validatePassword(value);
      setErrors((prev) => ({
        ...prev,
        password: isValid
          ? ""
          : "Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character",
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
    if (inputs.email === "" || inputs.password === "") {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      const config = {
        withCredentials: true,
      };
    if (noErrors) {
      try {
        if (state) {
          // Update existing user
          await axios.put(`${import.meta.env.VITE_BACKEND_URL}/backend/users/${state.id}`, inputs),config;
        } else {
          // Register new user
          await axios.post(`${import.meta.env.VITE_BACKEND_URL}/backend/auth/reg`, inputs,config);
        }
        navigate("/Login");
      } catch (err) {
        console.log(err);
      }
    } else {
      setSubmitted(true);
    }
  } catch (err) {
    console.log(err);
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