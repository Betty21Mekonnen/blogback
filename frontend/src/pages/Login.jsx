import React, { useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import image2 from '../assets/image2.png'
import axios from 'axios';
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
  const handleChange=(e)=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/backend/auth/log', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)  
      });

     // const data = await response.json();

      if(response.status === 200) {
        navigate("/")
      }

    } catch(err) {
      console.error(err);
    }
  }
  return (
	<div className="h-screen">
  <div className="h-full">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src={image2}
          className=" lg:w-full lg:h-auto md:h-20 md:w-20 md:pl-15"
          alt="login" />
		           <p className="text-3xl font-bold font-serif md:text-lg pt-5 text-center">WELCOME!</p> 
      </div>
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
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
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div className="mt-2">
          <input onChange={handleChange} id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
	  <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
      <div>
        <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </div>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link to='/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</Link>
    </p>
  </div>
</div>
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

