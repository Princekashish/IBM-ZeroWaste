import React from "react";
import { logo } from "../../assets";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className='bg-black text-white lg:h-80 h-60 p-9 lg:gap-0 gap-4 flex justify-between  '>
      <div className=' flex flex-col justify-around    w-1/6  h-2/3  '>
        <img src={logo} alt="" className='filter invert grayscale  w-full ' />
        <div className='flex justify-around lg:gap-0 gap-2 items-center w-2/3' >
            <FaFacebook size={30}/>
            <FaLinkedin size={30}/>
            <FaXTwitter size={30}/>
        </div>
      </div>

      <div className=' text-[#979797] text-center  text-sm flex flex-col sm:justify-around gap-1 h-full'>
        <h1 className='lg:text-2xl text-sm  font-semibold text-white'>Home</h1>
        <p className='lg:text-2xl text-[12px]'>About us</p>
        <p className='lg:text-2xl text-[12px]'>Testimonials</p>
        <p className='lg:text-2xl text-[12px]'>Contact us</p>
      </div>
      <div className=' text-[#979797] text-center  text-sm  flex flex-col sm:justify-around gap-1 h-full'>
        <h1 className='lg:text-2xl text-sm  font-semibold text-white'>Connect</h1>
        <p className='lg:text-2xl text-[12px]'>Facebook</p>
        <p className='lg:text-2xl text-[12px]'>Instagram</p>
        <p className='lg:text-2xl text-[12px]'> LinkedIn</p>
      </div>
      <div className=' text-[#979797]  text-sm   flex flex-col sm:justify-around gap-1 h-full'>
        <h1 className='lg:text-2xl text-sm  font-semibold text-white'>Contact us</h1>
        <p className='lg:text-2xl text-[12px]'>ZeroWaste@gmail.com</p>
        <p className='lg:text-2xl text-[12px]'>+91-9711644XXX</p>
        <p className='lg:text-2xl text-[12px]'>Eloitte Eve, Parkville 3052,<br/> Melbourne Canada</p>
      </div>
    </div>
    <div className='bg-[#2D2D2D] flex justify-between items-center h-14 p-3'>
      <p className='  text-[#979797] text-sm w-1/3'>© 2024  IBM. All rights reserved. </p>
      <div className='text-white flex  justify-around gap-6'>
        <p className=' text-sm'>Terms of Service</p>
        <p className='text-sm'>Privacy Policy </p>
      </div>
    </div>

    </>
  );
}

export default Footer;
