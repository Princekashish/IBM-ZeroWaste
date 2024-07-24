import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { blogbg, cardimg, Educationbanner, gallery, image1 } from "../assets";
import { Button } from "../Components";
import { Link } from "react-router-dom";
import Sponser from "../Components/Sponser";

function Education() {
  return (
    <div className="p-0 ">
      <div className="p-4">
        <Link to="/">
          <h1 className=" lg:text-xl text-sm font-semibold flex gap-2 items-center">
            <FaArrowLeft />
            Back
          </h1>
        </Link>
      </div>
      <div className="xl:p-10">
        <img src={Educationbanner} alt="" />
      </div>
      {/* marque */}
      <Sponser />
      <div className=" py-9 flex-col justify-start ">
        <div className="p-5 space-y-5 xl:space-y-10 xl:flex xl:justify-center xl:items-center xl:flex-col">
          <h1 className="text-2xl font-semibold xl:tracking-widest xl:text-center">
            IMPORTANCE OF DONATION
          </h1>
          <p className=" text-sm xl:text-center xl:w-[1052px] xl:tracking-wider xl:leading-8">
            Donating is a powerful way to make a meaningful impact on the lives
            of those in need, providing you with a profound sense of purpose and
            fulfillment. By contributing, you directly help individuals and
            families, fostering a deep connection to your community and
            understanding local challenges. This act of generosity not only
            brings personal satisfaction and gratitude but also sets a positive
            example for others, inspiring them to follow your lead.
            <br />
            <br />
            Ultimately, donating allows you to play an active role in creating
            positive change, making the world a better place while growing
            personally and connecting with those around you.
          </p>
        </div>
        {/* shorts */}
        <div>
          <div className="flex flex-wrap justify-center items-center   p-5 gap-10">
            <iframe
              className="lg:w-96 h-[360px] w-full lg:h-52 lg:m-4 lg:p-0 p-2 rounded-2xl"
              src="https://www.youtube.com/embed/epB33CUpeY8?si=iC3XdZJfMFw8fuco"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-96  lg:h-52   lg:m-4 lg:p-0 p-2 rounded-2xl"
              src="https://www.youtube.com/embed/pUbwdOmKyLY?si=aOhxcNc-2BL3nslz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-96   lg:h-52   lg:m-4 lg:p-0 p-2 rounded-2xl"
              src="https://www.youtube.com/embed/drGeDmBXNuU?si=bJIMPfSB-Xp7Itpr"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex justify-center items-center p-5  flex-wrap gap-5">
            <iframe
              className="lg:w-52  lg:p-0 lg:h-96 h-64 rounded-lg "
              src="https://youtube.com/embed/9-SvNJBzlgI?si=jOD98QlTNwClwlN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-52  lg:p-0 lg:h-96 h-64 rounded-lg "
              src="https://youtube.com/embed/9-SvNJBzlgI?si=jOD98QlTNwClwlN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-52  lg:p-0 lg:h-96 h-64 rounded-lg "
              src="https://youtube.com/embed/9-SvNJBzlgI?si=jOD98QlTNwClwlN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* gallery */}
      <div className="p-5 xl:p-10">
        <h1 className="text-2xl font-semibold  font-poppins xl:tracking-widest xl:text-center">GALLERY</h1>
        <div className="mt-10">
          <img src={gallery} alt="" />
        </div>
      </div>
      {/* blog */}
      <div
        style={{
          backgroundImage: `url(${blogbg})`,
        }}
        className=" p-5 xl:p-10"
      >
        <h1 className="text-3xl text-gray-600 font-semibold capitalize xl:tracking-widest xl:text-center">Blog</h1>
        <div className="flex md:justify-center justify-center lg:gap-8 gap-5 lg:p-6  mt-10 flex-wrap ">
          <div className="p-4 bg-black text-white w-[320px] md:w-[440px] md:h-[566px] xl:w-[340px] xl:h-[586px]   rounded-[20px] space-y-3">
            <img src={cardimg} alt="" className=" w-full lg:h-52 h-30" />
            <p className="lg:text-[13px] text-[8px] lg:my-2 my-1 ">
              Feeding India | June 7, 2024
            </p>
            <h1 className="lg:text-[24px] text-[14px] font-semibold">
              Bridging the Nutritional Gap:
            </h1>
            <h3 className="lg:text-[15px] text-[10px] lg:flex hidden">
              The impact of India’s Mid Day Meal Scheme and Feeding India’s
              Daily Feeding Program
            </h3>
            <p className="lg:text-[11px] text-xs lg:py-2 py-1">
              India’s Mid Day Meal Scheme, now known as PM POshan Scheme, can be
              consifered as a transformative initiative in addressing hunger,
              malnutrition, and even educational disparities among
            </p>
            <div className="flex justify-center items-center">
              <Button
                msg="ReadMore"
                className="border-2 border-white bg-black w-32 h-9 "
              />
            </div>
          </div>
          <div className="p-4 bg-black text-white w-[320px] rounded-[20px] space-y-3 md:w-[440px] md:h-[566px] xl:w-[340px] xl:h-[586px]">
            <img src={cardimg} alt="" className="w-full   lg:h-52 h-30" />
            <p className="lg:text-[13px] text-[8px] lg:my-2 my-1 ">
              Feeding India | June 7, 2024
            </p>
            <h1 className="lg:text-[24px] text-[14px] font-semibold">
              Bridging the Nutritional Gap:
            </h1>
            <h3 className="lg:text-[15px] text-[10px] lg:flex hidden">
              The impact of India’s Mid Day Meal Scheme and Feeding India’s
              Daily Feeding Program
            </h3>
            <p className="lg:text-[11px] text-xs lg:py-2 py-1">
              India’s Mid Day Meal Scheme, now known as PM POshan Scheme, can be
              consifered as a transformative initiative in addressing hunger,
              malnutrition, and even educational disparities among
            </p>
            <div className="flex justify-center items-center">
              <Button
                msg="ReadMore"
                className="border-2 border-white bg-black w-32 h-9 "
              />
            </div>
          </div>
          <div className="p-4 bg-black text-white w-[320px] rounded-[20px] space-y-3 md:w-[440px] md:h-[566px]  xl:w-[340px] xl:h-[586px]">
            <img src={cardimg} alt="" className="w-full  lg:h-52 h-30" />
            <p className="lg:text-[13px] text-[8px] lg:my-2 my-1 ">
              Feeding India | June 7, 2024
            </p>
            <h1 className="lg:text-[24px] text-[14px] font-semibold">
              Bridging the Nutritional Gap:
            </h1>
            <h3 className="lg:text-[15px] text-[10px] lg:flex hidden">
              The impact of India’s Mid Day Meal Scheme and Feeding India’s
              Daily Feeding Program
            </h3>
            <p className="lg:text-[11px] text-xs lg:py-2 py-1">
              India’s Mid Day Meal Scheme, now known as PM POshan Scheme, can be
              consifered as a transformative initiative in addressing hunger,
              malnutrition, and even educational disparities among
            </p>
            <div className="flex justify-center items-center">
              <Button
                msg="ReadMore"
                className="border-2 border-white bg-black w-32 h-9 "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            msg="See More"
            className="bg-[#EFEFEF] text-orange-500 rounded-lg m-4 border-2 border-black w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
