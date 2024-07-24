import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Scrollbar } from "swiper/modules";

function Hero() {
  return (
    <div className="font-poppins  p-5 h-[80vh] md:mt-10   flex justify-start pt-10 md:h-[30vh]   xl:h-[70vh] items-start xl:p-10 xl:gap-10 xl:justify-around gap-10 flex-col xl:flex-row">
      <div>
        <div className="xl:flex xl:flex-col xl:justify-center xl:items-start xl:gap-5 ">
          <h1 className=" text-black font-poppins text-4xl lg:text-6xl font-bold text-center lg:text-start  lg:tracking-wider">
            Together <br className="lg:hidden" /> We{" "}
            <br className="hidden lg:block" /> Can Feed the{" "}
            <br className="hidden lg:block" />
            Future
          </h1>
          <h1 className="p-2 text-black font-poppins lg:w-[441px] text-center lg:text-start leading-relaxed tracking-tight text-sm font-light ">
            "Together, we can end hunger and make the world a better place. Your
            donation is a powerful act of kindness that feeds hope and nourishes
            communities."
          </h1>
        </div>
        <div className="flex justify-center items-start gap-5 lg:justify-start xl:p-5">
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
            <SwiperSlide className="flex items-center justify-center w-full ">
              <img src="./pic4.png" alt="" className="h-[220px] md:h-[320px] rounded-xl" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center w-full  ">
              <img src="./pic9.png" alt="" className="h-[220px] md:h-[320px] rounded-xl" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center w-full">
              <img src="./pic3.png" alt="" className="h-[220px] md:h-[320px] rounded-xl" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center w-full">
              <img src="./pic6.png" alt="" className="h-[220px] md:h-[320px] rounded-xl" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="hidden lg:block ">
        <img src="./hero.png" alt="Hero" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default Hero;
