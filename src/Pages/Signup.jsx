import React from 'react'

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-400">
      <div className="flex flex-row items-center w-full max-w-4xl">
        <div className="w-1/2 p-8">
          <div className="flex items-center justify-center h-full">
            <img
              src="../assets/signup.png"
              alt="Sign Up"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-1/2 p-8 bg-gray-100 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-center">SIGN UP</h2>
          <form className="flex flex-col">
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="flex-1 p-2 mr-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="flex-1 p-2 ml-2 border border-gray-300 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Create Username"
              className="p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Create Password"
              className="p-2 mb-6 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="p-2 text-white bg-orange-500 rounded hover:bg-orange-600"
            >
              SIGN UP
            </button>
          </form>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="p-2 text-black bg-white rounded-full shadow hover:bg-gray-200">
              <i className="fab fa-google"></i>
            </button>
            <button className="p-2 text-black bg-white rounded-full shadow hover:bg-gray-200">
              <i className="fab fa-facebook"></i>
            </button>
            <button className="p-2 text-black bg-white rounded-full shadow hover:bg-gray-200">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
      </div>
      <button className="absolute top-4 left-4 text-black hover:underline">
        &lt; Back
      </button>
    </div>
  );
};

export default Signup
