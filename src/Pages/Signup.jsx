import React from "react";
import { signup } from "../assets";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-400">
      <div className="flex flex-row items-center justify-center  w-full ">
        <div className="w-1/2 p-8 hidden xl:block">
          <div className="flex items-center justify-center h-full">
            <img src={signup} alt="Sign Up" className="w-full h-auto" />
          </div>
        </div>
        <div className=" p-8 bg-gray-100 shadow-lg rounded-2xl">
          <h2 className="mb-6 text-2xl font-bold text-center">SIGN UP</h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Username"
              className="py-3  rounded-full px-12 outline-none"
            />
            <input
              type="email"
              placeholder="Email ID"
              className=" py-3  rounded-full px-12 outline-none"
            />

            <input
              type="password"
              placeholder="password"
              className="py-3  rounded-full px-12 outline-none"
            />
            <button
              type="submit"
              className="p-2 text-white bg-orange-500  hover:bg-orange-600 rounded-full"
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
}

export default Signup;
