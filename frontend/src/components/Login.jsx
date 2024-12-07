import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import GoogleButton from 'react-google-button';

const Login = () => {
  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
    console.log('Google Sign In Clicked');
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-white">
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0 bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://your-illustration-url.com')" }} />
      <motion.div
        className="relative z-10 p-8 bg-white rounded-lg shadow-lg w-96"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Sign in to Google
        </h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Email</label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-green-500">
              <FaEnvelope className="ml-2 text-red-500" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Password</label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-green-500">
              <FaLock className="ml-2 text-yellow-500" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 focus:outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white transition duration-200 bg-green-500 rounded hover:bg-green-600"
          >
            Log In
          </button>
        </form>
        {/* Google Button */}
        <div className="mt-4">
          <GoogleButton
            onClick={handleGoogleSignIn}
            style={{ width: '100%' }}
          />
        </div>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
