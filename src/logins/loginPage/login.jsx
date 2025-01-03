import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [eyeIcon, setEyeIcon] = useState(<FaEyeSlash />);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setEyeIcon(<FaEye />);
    } else {
      setPasswordType("password");
      setEyeIcon(<FaEyeSlash />);
    }
  };

  return (
    <div className="w-[70vw] max-w-[32em] mx-auto mt-5 flex flex-col gap-y-12">
      <div className="w-full flex flex-col gap-4 ">
        <div className="w-full  flex flex-col gap-y-5 bg-white rounded-lg ">
          <div className="px-10 mt-10 ">
            <h1 className="  text-3xl font-bold ">
              Welcome to the Student Loan <br /> Portal
            </h1>
          </div>
          <div className="px-10 mb-3">
            <p className="text-md">
              Kindly provide the required details below to login
            </p>
          </div>
          <form
            bindsubmit="submitForm"
            className="w-full flex flex-col gap-y-5 px-10 "
          >
            <div className="mb-3">
              <label
                for="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                required
                className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-2 focus:border-green-600 focus:ring-green-600"
              />
            </div>
            <div className="mb-2 relative">
              <label
                for="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={passwordType}
                  id="password"
                  name="password"
                  placeholder="******************"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-2 focus:border-green-500 focus:ring-green-500 bg-white"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 mt-2 mr-2"
                  onClick={togglePassword}
                >
                  {eyeIcon}
                </button>
              </div>
            </div>

            {/* login btn */}
            <Link to="/dashboard/home">
              <div className="bg-green-700 text-center hover:bg-green-700 mb-0 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                <button type="submit">Login</button>
              </div>
            </Link>
          </form>

          <div className="  px-10 mb-5 ">
            <Link to="/auth/reset-password">
              <h1 className=" text-end text-red-800 font-semibold  ">
                Reset Password
              </h1>
            </Link>
          </div>
        </div>

        {/* create new account */}

        <div>
          <h1 className="text-center text-gray-700 font-semibold ">
            Don't have an Account?{" "}
            <span className="text-green-800 font-semibold ">
              Create New Account
            </span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
