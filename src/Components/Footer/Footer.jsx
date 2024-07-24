import React from "react";
import { logo } from "../../assets";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-black text-white h-1/2 p-9  flex  flex-col ">
        <div className=" flex justify-between   gap-10  ">
          <div>
            <img
              src={logo}
              alt=""
              className="filter invert grayscale max-h-1/2 "
            />
          </div>
          <div className="flex justify-around items-center gap-5">
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
            <FaXTwitter size={30} />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center mt-10 gap-5 ">
          {/* home */}
          <div className=" text-[#979797]  flex flex-col sm:justify-around font-poppins gap-2 text-center" >
            <h1 className="text-sm  font-semibold text-white">Home</h1>
            <div className="text-xs text-center">
              <p>About us</p>
              <p>Testimonials</p>
              <p>Contact us</p>
            </div>
          </div>
          {/* connect */}
          <div className=" text-[#979797]  flex flex-col justify-around  font-poppin gap-2  text-center">
            <h1 className="text-sm  font-semibold text-white">Connect</h1>
            <div className="text-xs  text-center">
              <p>Facebook</p>
              <p>Instagram</p>
              <p> LinkedIn</p>
            </div>
          </div>
          {/* contact */}
          <div className=" text-[#979797]  flex flex-col sm:justify-around justify-center items-center  font-poppin gap-2">
            <h1 className="text-sm  font-semibold text-white">Contact us</h1>
            <div className="text-xs  text-center">
              <p>ZeroWaste@gmail.com</p>
              <p>+91-9711644XXX</p>
              <p>
                Eloitte Eve, Parkville 3052,
                <br /> Melbourne Canada
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2D2D2D] flex justify-center flex-col items-center h-14 p-5 ">
        <p className="  text-[#979797] text-[14px]">
          © 2024 IBM. All rights reserved.{" "}
        </p>
        <div className="text-white text-[10px] flex gap-5 ">
          <p className="underline">Terms of Service</p>
          <p className="underline">Privacy Policy </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
