import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Scrollbar } from "swiper/modules";

function Hero() {
  return (
    <div className="h-[80vh] lg:h-[70vh] mt-10">
      <div className="flex flex-col justify-center items-center  gap-10 lg:flex-row lg:p-10 lg:justify-around">
        <div className="space-y-5 p-5 ">
          <h1 className=" text-black font-poppins text-4xl lg:text-6xl font-bold text-center lg:text-start  lg:tracking-wider">
            Together <br className="lg:hidden" /> We <br className="hidden lg:block"/> Can Feed the  <br  className="hidden lg:block"/>Future
          </h1>
          <h1 className="p-2 text-black font-poppins lg:w-[441px] text-center lg:text-start leading-relaxed tracking-tight text-sm font-light ">
            "Together, we can end hunger and make the world a better place. Your
            donation is a powerful act of kindness that feeds hope and nourishes
            communities."
          </h1>
          <div className="flex justify-center items-center gap-5 lg:justify-start">
            <Link
              to={"/contact"}
              className="bg-[#e6511a] px-5 py-[6px] lg:py-3 lg:px-7 rounded-full text-white font-poppins outline-none focus:scale-110 hover:scale-110 transition"
            >
              JOIN US
            </Link>
            <Link
              to={"/donation"}
              className="bg-[#000000] px-5 py-[6px] lg:py-3 lg:px-7 rounded-full text-white font-poppins outline-none focus:scale-110 hover:scale-110 transition"
            >
              DONATE
            </Link>
          </div>
        </div>

        {/* slider */}
        <div className="w-full max-w-4xl mx-auto lg:hidden">
          <Swiper
            modules={[Navigation, Scrollbar, Autoplay]}
            spaceBetween={5}
            slidesPerView={1.5}
            centeredSlides={true}
            breakpoints={{
              0: { slidesPerView: 1.15 },
              400: { slidesPerView: 1.15 },
              639: { slidesPerView: 1.15 },
              865: { slidesPerView: 1.15 },
              1000: { slidesPerView: 1.15 },
              1500: { slidesPerView: 1.15 },
              1700: { slidesPerView: 1.15 },
            }}
            navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 8000 }}
            className="w-full"
          >
            <div className="object-cover">
              <SwiperSlide className="flex items-center justify-center w-full">
                <img src="./pic4.png" alt="" className="h-[220px] "/>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center w-full  ">
                <img src="./pic9.png" alt="" className="h-[220px] " />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center w-full">
                <img src="./pic3.png" alt="" className="h-[220px] "/>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center w-full">
                <img src="./pic6.png" alt="" className="h-[220px] " />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="hidden lg:block  h-[467px] w-[480px]">
        <img src="./hero.png" alt="" />

        </div>
      </div>
    </div>
  );
}

export default Hero;
