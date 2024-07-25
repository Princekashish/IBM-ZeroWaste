import React, { useState } from "react";
import { logo } from "../../assets";
// import { Link } from "react-dom";
import { Button } from "../index";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
function Navbar() {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Testimanials",
      link: "/testimonials",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Education",
      link: "/education",
    },
  ];

  return (
    <div className="sticky top-0 shadow-md bg-[#EEF7F8] lg:p-5 p-4 flex justify-between items-center w-full">
      <div>
        <Link to='/'>
        <img src={logo} alt="logo" className="lg:max-h-14  max-h-9  " />
        </Link>
      </div>

      <div className="lg:flex hidden  w-2/3 items-center ">
        <div className=" lg:flex  justify-around w-full ">
          {navItems.map((item, index) => {
            return (
              <Link to={item.link}>
              <div
                key={index}
                className="font-bold text-xl ]cursor-pointer text-[#484848]"
                >
                <h4>{item.name}</h4>
              </div>
                </Link>
            );
          })}
        </div>
        <div>
          <Button msg="LOGIN" />
        </div>
      </div>

      <div className="lg:hidden flex-col felx-1 justify-end ">
        <div>
          <button onClick={() => setToggle((prev) => !prev)}>
            {!toggle ? (
              <GiHamburgerMenu size={30} />
            ) : (
              <IoCloseSharp size={30} />
            )}
          </button>
        </div>
        <div className={` ${toggle ? "flex" : "hidden"} p-3 bg-white  absolute top-20 right-0 mx-4 my-2 min-w-[140px] border-2 border-black rounded-xl  `}>
          <div className="   w-full ">
            {navItems.map((item, index) => {
              return (
              <Link to={item.link}>
                
                <div
                  key={index}
                  className="font-bold text-xl ]cursor-pointer text-[#484848]"
                >
                  <h4>{item.name}</h4>
                </div>
                </Link>
              );
            })}
            <div>
              <Button msg="LOGIN" className="sm:text-lg text-xs p-2"  />
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default Navbar;
