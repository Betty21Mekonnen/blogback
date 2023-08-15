
import React from "react";
import { Link } from "react-router-dom";
import useRegisterForm from "../validation/IsFormValid";
import image2 from"../assets/image2.png"
const Register = () => {
  const { inputs, errors, isSubmitting, handleChange, handleSubmit } =
    useRegisterForm();

  return (
    <div className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src={image2}
              className=" lg:w-full lg:h-auto md:h-20 md:w-20 md:pl-15"
              alt="logo"
            />
            <p className="text-3xl font-bold font-serif md:text-lg pt-5 text-center">
              Tell us about yourself
            </p>
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form className="shadow-lg">
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="mt-10 md:mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up
                  </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <div className="space-y-6" action="#" method="POST">
                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        User Name
                      </label>
                      <div className="mt-2">
                        <input
                          value={inputs.username}
                          onChange={handleChange}
                          name="username"
                          type="text"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {isSubmitting && errors.username && (
                          <p className="text-red-500 text-sm">
                            {errors.username}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                        value={inputs.email}
                          onChange={handleChange}
                          name="email"
                          type="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       />
                        {isSubmitting && errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          value={inputs.password}
                          onChange={handleChange}
                          name="password"
                          type="password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {isSubmitting && errors.password && (
                          <p className="text-red-500 text-sm">
                            {errors.password}
                          </p>
                        )}
                      </div>
                    </div>

                    <button onClick={handleSubmit} type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:shadow-outline-blue active:bg-gray-900">
             Sign up </button>
                    <div className="flex justify-center mt-6 text-sm leading-5">
         <Link to="/login"
            className="font-medium text-gray-900 hover:text-gray-700 focus:outline-none focus:underline transition ease-in-out duration-150" >
                        already have an account? sign in </Link>
       </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;