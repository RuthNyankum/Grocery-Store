import React, { useState } from 'react';
import { FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 md:px-0">
      <div className="w-full max-w-md">
        <h1 className="font-bold text-2xl mb-3 text-center">Signup</h1>

        <form action="" className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-lg font-medium text-gray-700 pl-2"
            >
              Fullname
            </label>
            <input
              type="text"
              placeholder="Ruth Brown"
              id="fullName"
              className="w-full h-14 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 pl-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              className="w-full h-14 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 pl-2"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              className="w-full h-14 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 bottom-20 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className="w-5 h-5" />
              ) : (
                <FaEye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-gray-700 pl-2"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full h-14 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 bottom-20 transform -translate-y-1/2"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="w-5 h-5" />
              ) : (
                <FaEye className="w-5 h-5" />
              )}
            </button>
          </div>

          <button className="w-full h-14 px-4 py-2 text-lg bg-primary text-white rounded-full hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </form>

        <div className="mt-8">
          <p className="text-center text-gray-500 mb-4">Or sign up with</p>
          <div className="flex justify-center space-x-4">
            <a
              href="/auth/facebook"
              className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:bg-secondary transition duration-300"
            >
              <FaFacebookF className="text-white w-5 h-5" />
            </a>
            <a
              href="/auth/google"
              className="w-12 h-12 flex items-center justify-center bg-white text-black border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300"
            >
              <FcGoogle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="text-primary hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
