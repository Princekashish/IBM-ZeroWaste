import React from 'react'
import { signup } from '../assets';

function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden  shadow-slate-800">
            <div className="w-full md:w-1/2 bg-[#E6511A] flex flex-col justify-center items-center p-8 ">
                <img
                    src= {signup}
                    alt="Sign Up Illustration"
                    className="h-40 w-40"
                />
                <h2 className="text-white text-3xl font-bold mt-4">Welcome to Sign Up</h2>
            </div>
            <div className="w-full md:w-1/2 p-8 bg-slate-200 ">
                <h2 className="text-2xl font-bold mb-4">SIGN UP</h2>
                <form className="space-y-4">
                    <div className="flex flex-col md:flex-row md:space-x-4 ">
                        <input
                            type="text"
                            placeholder="Enter Name "
                            className="w-full md:w-1/2 p-2 pl-4 mb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eebeac]"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email ID"
                            className="w-full md:w-1/2 p-2 pl-4 mb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eebeac]"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Create Username"
                        className="w-full p-2 pl-4 mb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eebeac]"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Create Password"
                        className="w-full p-2 pl-4 mb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eebeac]"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#E6511A] text-white py-2 mb-2 rounded-md font-bold hover:bg-[#cf4614] transition duration-200"
                    >
                        SIGN UP
                    </button>
                </form>
                <div className="flex justify-center mt-4 space-x-4">
                    <button className="bg-gray-100 p-2 rounded-full">
                        <img src="https://images.app.goo.gl/4B6QHgfTo5b578dA8" alt="Google" />
                    </button>
                    <button className="bg-gray-100 p-2 rounded-full">
                        <img src="https://images.app.goo.gl/4B6QHgfTo5b578dA8" alt="Facebook" />
                    </button>
                    <button className="bg-gray-100 p-2 rounded-full">
                        <img src="https://images.app.goo.gl/4B6QHgfTo5b578dA8" alt="Twitter" />
                    </button>
                </div>
            </div>
        </div>
    </div>
);
};
export default Signup
