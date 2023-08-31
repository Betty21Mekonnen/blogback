// import React from 'react'
// import { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from 'axios'


// function ResetPassword() {
//     const [password, setPassword] = useState()
//     const navigate = useNavigate()
//     const {id, token} = useParams()

//     axios.defaults.withCredentials = true;
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post(`${import.meta.env.VITE_BACKEND_URL}/backend/auth/reset-password/${id}/${token}`, {password})
//         .then(res => {
//             if(res.data.Status === "Success") {
//                 navigate('/login')
               
//             }
//         }).catch(err => console.log(err))
  
//     }

//     return(
//         <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h4>Reset Password</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>New Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               autoComplete="off"
//               name="password"
//               className="form-control rounded-0"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             Update
//           </button>
//           </form>
        
//       </div>
//     </div>
//     )
// }
// export default ResetPassword;
import React from 'react'
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import image2 from '../assets/image2.png'
import { validatePassword} from "../validation/Validation"
function ResetPassword() {
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("");
    const navigate = useNavigate()
    const {id, token} = useParams()
    axios.defaults.withCredentials = true;
    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      if (!password) {
        setErrors({
          password: 'Password is required',
        });
        return;
      }
    
      const isValid = validatePassword(password);
      if (!isValid) {
        setErrors({
          password:
            'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character',
        });
        return;
      }
    
      axios
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/backend/auth/reset-password/${id}/${token}`, {password})
      .then((response) => {
        if (response.data.status === 'Success') {
          navigate('/login');
        }
        else {
           console.error('Password reset failed:', response.data.message);
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
         // console.error('An error occurred during password reset:', error.response.data.error);
          setErrors({ tok: error.response.data.error });
        }})
    }
    console.log(errors)
    return(
      <div className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <Link to="/login" ><img src={image2} className=" lg:w-full lg:h-auto md:h-20 md:w-20 md:pl-15" alt="login" /></Link> 
          </div>
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
      {errors.tok && (
                      <p className="text-red-500 text-sm">
                      {errors.tok}
                      </p>
                     )}
           <form className='shadow-lg'>
		       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 md:mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset password</h2>
            </div>
         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
           <div className="space-y-6" action="#" method="POST">
              <div>
               <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="mt-2">
               <input
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
               {errors.password && (
                          <p className="text-red-500 text-sm">
                            {errors.password}
                          </p>
                        )}
              </div>
             </div>
             <button onClick={handleSubmit} type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:shadow-outline-blue active:bg-gray-900">
             Update </button>
             <div className="flex justify-center mt-6 text-sm leading-5">
         <Link to="/login"
            className="font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:underline transition ease-in-out duration-150" >
                        Login </Link>
             </div>
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
export default ResetPassword;