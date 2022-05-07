// React-React DOM
import React from "react";
import { Link } from "react-router-dom";
// Components
import SocialLogin from "../SocialLogin/SocialLogin";
const SignIn = () => {
  return (
    <section className="text-gray-600 body-font">
      <form className="px-16 py-24 lg:w-1/2 w-full mx-auto">
        <div className=" bg-gray-100 rounded-lg p-8  mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign In
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="flex items-center justify-between mt-3 mb-5">
            <input
              type="submit"
              value="Sign In"
              className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer"
            />
            <p className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer">
              Reset Password?
            </p>
          </div>
          <p className="text-center text-md font-medium">
            Don't have an account?
            <Link to="/signup" className="font-bold text-md text-indigo-600">
              Create
            </Link>
          </p>
        </div>
        <SocialLogin />
      </form>
    </section>
  );
};

export default SignIn;