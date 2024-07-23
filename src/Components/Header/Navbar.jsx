import React, { useState } from "react";
import { logo } from "../../assets";
import { Link } from "react-dom";
import { Button } from "../index";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Testimanials",
      link: "/testimonials",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className=" sm:p-6 p-3 flex justify-between items-center w-full">
      <div>
        <img src={logo} alt="logo" className="sm:max-h-14  max-h-9  " />
      </div>

      <div className="sm:flex hidden  w-1/2 items-center ">
        <div className=" sm:flex  justify-around w-full ">
          {navItems.map((item, index) => {
            return (
              <div
                key={index}
                className="font-bold text-xl ]cursor-pointer text-[#484848]"
              >
                <h4>{item.name}</h4>
              </div>
            );
          })}
        </div>
        <div>
          <Button msg="LOGIN" />
        </div>
      </div>

      <div className="sm:hidden flex-col felx-1 justify-end  ">
        <div>
          <button onClick={() => setToggle((prev) => !prev)}>
            {!toggle ? (
              <GiHamburgerMenu size={30} />
            ) : (
              <IoCloseSharp size={30} />
            )}
          </button>
        </div>
        <div className={` ${toggle ? "flex" : "hidden"} p-3   absolute top-20 right-0 mx-4 my-2 min-w-[140px] border-2 border-black rounded-xl  `}>
          <div className="   w-full ">
            {navItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="font-bold text-xl ]cursor-pointer text-[#484848]"
                >
                  <h4>{item.name}</h4>
                </div>
              );
            })}
            <div>
              <Button msg="LOGIN" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
