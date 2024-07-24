import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const marque = [
    { img: "./01.svg" },
    { img: "./02.svg" },
    { img: "./03.svg" },
    { img: "./04.svg" },
    { img: "./05.svg" },
    { img: "./06.svg" },
    { img: "./07.svg" },
    { img: "./08.svg" },
    { img: "./09.svg" },
    { img: "./10.svg" },
  ];
  return (
    <div className="font-poppins  p-5 min-h-screen     " >
      <h1 className=" text-[#e6511a] md:text-xl text-base font-semibold uppercase leading-[60px] tracking-[3.78px] lg:text-center md:text-center">
        About us
      </h1>
      <h1 className=" text-black font-poppins text-2xl font-bold lg:text-center md:text-center">
        Passionate People Making a Difference in the Fight Against Hunger
      </h1>
      <div className="mt-5 flex flex-col justify-center items-center lg:flex-row gap-10 lg:mt-10">
        <div className="flex gap-2">
          <div className="flex justify-end items-end ">
            <img
              src="./aboutq1(2).png"
              alt="about"
              className="w-[300px] h-[130px] lg:h-[180px] md:h-[180px]"
            />
          </div>
          <div>
            <img src="./about2.png" alt="" />
          </div>
        </div>
        <div>
          <h1 className="md:text-xl text-black text-sm font-light lg:w-[490px]">
            we are committed to eradicating hunger and providing nutritious
            meals to those in need. Our mission is to connect generous donors
            with food-insecure communities, ensuring that no one goes to bed
            hungry. <br className="hidden lg:block" />{" "}
            <br className="hidden lg:block" />
            Through collaboration, dedication, and community support, we strive
            to create a world where everyone has access to healthy and
            sufficient food.
          </h1>
        </div>
      </div>
      {/* marque */}
      <div className="w-full  overflow-x-hidden text-white bg-stone-700 mt-10 ">
        <div className="flex p-3">
        <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:50,repeat:Infinity,ease:'linear'}} className=" flex mx-auto flex-shrink-0">
          {marque.map((items, i) => (
            <img src={items.img} alt="marquee" className="h-10 pr-20" key={i}/>
          ))}
        </motion.div>
        <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:50,repeat:Infinity,ease:'linear'}} className=" flex mx-auto flex-shrink-0">
          {marque.map((items, i) => (
            <img src={items.img} alt="marquee" className="h-10 pr-20" key={i}/>
          ))}
        </motion.div>
        </div>
      </div>
      {/* soliddaty pan */}
      <div className="mt-10  flex justify-center items-center">
        <img src="./Solidarity-pana (2) 1.png" alt="" />
      </div>
      {/* banner2 */}
      <div>
        <div className="bg-banner   bg-cover bg-center bg-no-repeat h-[300px] mt-10 rounded-2xl flex justify-center items-center flex-col">
        <h1 className=" text-center text-white text-2xl font-bold tracking-tight p-4 font-poppins">You can contribute to provide a meal to the people with needs...!</h1>
        <div className="flex justify-center items-center gap-3 p-5">
           <button className="bg-black text-white px-7 py-3 rounded-full border border-white capitalize outline-none focus:scale-110 hover:scale-110 transition">Join Us as volunteer</button>

        </div>
        </div>
      </div>

    </div>
  );
}
