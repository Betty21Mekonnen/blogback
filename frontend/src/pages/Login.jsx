import React, { useState,useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import image2 from '../assets/image2.png'
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import {validateEmail, validatePassword} from "../validation/Validation"
/*export default function Login() {
  const navigate=useNavigate()
  const [inputs ,setInput]=useState({
    email:"",password:""
  })
  const handleChange=(e)=>{
    setInput(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit=async e=>{
    e.preventDefault()
    try{
   await axios.post("http://localhost:4000/backend/auth/log",inputs,{ withCredentials: true })
      navigate("/")
      console.log(token)
    }catch(err){
      console.log(err)
    }
  }
  // Login.js*/
export default function Login() {
  const navigate=useNavigate()
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting,    setSubmitted] = useState(false);
  const {login,loginResponse,logout,currentUser}=useContext(AuthContext)
  const handleChange=(e)=>{
    const { name, value } = e.target;

    if (name === 'email') {
      const isValid = validateEmail(value);
      setErrors((prev) => ({
        ...prev,
        email: isValid ? '' : 'Email is invalid',
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
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    
     }
  const noErrors = Object.values(errors).every((error) => !error);
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(inputs.email==="" || inputs.password===""){
          alert("Please fill in all required fields.")
       return;
      }
      if(noErrors){
       // console.log(loginResponse)
      await login(inputs)
      // if(loginResponse===200) {
      //   navigate("/");
      // }
    }
    else{
      setSubmitted(true)
    }  
    } catch(err) {
      console.error(err);
    }
    
  } 
  useEffect(() => {
    if (loginResponse === 200) {
    navigate("/");
    }
    }, [loginResponse]);
 
  const error=currentUser?.message
  return ( 
	<div className="h-screen">
  <div className="h-full">
    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img src={image2} className=" lg:w-full lg:h-auto md:h-20 md:w-20 md:pl-15" alt="login" />
		    <p className="text-3xl font-bold font-serif md:text-lg pt-5 text-center">WELCOME!</p> 
      </div>
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
      <div className="text-red-500 flex justify-center">{error!=null?
       (error):"" }</div>
        <form className='shadow-lg'>
		       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 md:mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
           <div className="space-y-6" action="#" method="POST">
              <div>
               <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
               <input onChange={handleChange} id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
               {isSubmitting && errors.email && (
                          <p  >{errors.email}</p>
                        )}
              </div>
             </div>
            <div>
             <div className="flex items-center justify-between">
               <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
             </div>
             <div className="mt-2">
               <input onChange={handleChange} id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
               {isSubmitting && errors.password && (
                          <p className="text-red-500 text-sm">
                            {errors.password}
                          </p>
                        )}
            </div>
            </div>
	            <div className="text-sm">
               <a href="#" className="font-semibold text-gray-900 hover:text-gray-700">Forgot password?</a>
             </div>
            <button onClick={handleSubmit} type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:shadow-outline-blue active:bg-gray-900">
             Sign in </button>
        </div>

        <div className="flex justify-center mt-6 text-sm leading-5">
         <Link to="/register"
            className="font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:underline transition ease-in-out duration-150" >
                        Not a member? register </Link>
       </div>
       </div>
      </div>
     </form>
      </div>
    </div>
  </div>
  </div>
  )
}

