import React from 'react'
import { logo } from '../../assets'
import { FaFacebook,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className='bg-black text-white h-80 p-9 flex justify-between  '>
      <div className=' flex flex-col justify-around    w-1/6  h-2/3  '>
        <img src={logo} alt="" className='filter invert grayscale max-h-1/2 ' />
        <div className='flex justify-around items-center w-2/3' >
            <FaFacebook size={30}/>
            <FaLinkedin size={30}/>
            <FaXTwitter size={30}/>
        </div>
      </div>

      <div className=' text-[#979797] text-center  text-sm flex flex-col sm:justify-around gap-1 h-full'>
        <h1 className='sm:text-2xl  font-semibold text-white'>Home</h1>
        <p>About us</p>
        <p>Testimonials</p>
        <p>Contact us</p>
      </div>
      <div className=' text-[#979797] text-center  text-sm  flex flex-col sm:justify-around gap-1 h-full'>
        <h1 className='sm:text-2xl font-semibold text-white'>Connect</h1>
        <p>Facebook</p>
        <p>Instagram</p>
        <p> LinkedIn</p>
      </div>
      <div className=' text-[#979797]  text-sm   flex flex-col sm:justify-around gap-1 h-full'>
        <h1 className='sm:text-2xl font-semibold text-white'>Contact us</h1>
        <p>ZeroWaste@gmail.com</p>
        <p>+91-9711644XXX</p>
        <p>Eloitte Eve, Parkville 3052,<br/> Melbourne Canada</p>
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
  )
}

export default Footer
