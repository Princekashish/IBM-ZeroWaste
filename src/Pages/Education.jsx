import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { blogbg, cardimg, Educationbanner, gallery, image1 } from "../assets";
import { Button } from "../Components";
import { Link } from 'react-router-dom'

function Education() {
  return (
    <div className="p-0">
      <div className="p-4">
        <Link to='/'>
        <h1 className=" lg:text-xl text-sm font-semibold flex gap-2 items-center">
          <FaArrowLeft />
          Back
        </h1>
        </Link>
      </div>
      <div className="py-3">
        <img src={Educationbanner} alt="" />
      </div>
      <div className="bg-[#000000] text-white flex  justify-around items-center gap-2 h-[74px] px-6 ">
        <h1 className="lg:text-[24px] text-[14px] font-semibold">SUPPORTED BY</h1>
        <img src={image1} alt="" className="lg:w-[15vw] w-24 lg:h-[30px] h-6" />
        <img src={image1} alt=""  className="lg:w-[15vw] w-24 lg:h-[30px] h-6"  />
        <img src={image1} alt="" className="lg:w-[15vw] w-24 lg:h-[30px] h-6"  />
      </div>
      <div className="text-center py-9 flex-col justify-center items-center   ">
        <div>
          <h1 className="text-[41px] font-semibold tracking-widest ">IMPORTANCE OF DONATION</h1>
          <p className=" flex items-center justify-center  px-20 py-4">
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
        <div>
          <div className="flex flex-wrap  ">
            <iframe
              className="lg:w-96 w-2/6 lg:h-52 h-40 lg:m-4 lg:p-0 p-2"
              src="https://www.youtube.com/embed/epB33CUpeY8?si=iC3XdZJfMFw8fuco"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-96 w-1/3 lg:h-52 h-40  lg:m-4 lg:p-0 p-2"
              src="https://www.youtube.com/embed/pUbwdOmKyLY?si=aOhxcNc-2BL3nslz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-96 w-1/3 lg:h-52 h-40  lg:m-4 lg:p-0 p-2"
              src="https://www.youtube.com/embed/drGeDmBXNuU?si=bJIMPfSB-Xp7Itpr"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex justify-center p-4 ">
            <iframe
              className="lg:w-52   lg:p-0  m-2 lg:h-96  rounded-lg lg:flex hidden "
              src="https://youtube.com/embed/9-SvNJBzlgI?si=jOD98QlTNwClwlN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-52  lg:p-0  m-2 lg:h-96 rounded-lg  lg:flex hidden"
              src="https://youtube.com/embed/9-SvNJBzlgI?si=jOD98QlTNwClwlN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-52 w-1/3 lg:p-0 p-2 m-2 lg:h-96 h-64 rounded-lg "
              src="https://youtube.com/embed/9-SvNJBzlgI?si=jOD98QlTNwClwlN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-52 w-1/3 lg:p-0 p-2 m-2 lg:h-96 h-64 rounded-lg "
              src="https://youtube.com/embed/9-SvNJBzlgI?si=jOD98QlTNwClwlN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="lg:w-52 w-1/3 lg:p-0 p-2 m-2 lg:h-96 h-64 lg:rounded-lg  "
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
      <div>
        <h1 className="text-[41px] font-semibold text-center m-5">GALLERY</h1>
        <div className="px-20 py-5">
          <img src={gallery} alt="" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${blogbg})`,
        }}
        className="my-8 p-2"
      >
        <h1 className="font-semibold text-[41px] text-center tracking-[5px]">BLOG</h1>
        <div className="flex lg:gap-8 gap-2 lg:p-6 p-2 ">
          <div className="p-4 bg-black text-white w-1/3 rounded-[20px] ">
            <img src={cardimg} alt="" className=" w-full lg:h-52 h-30" />
            <p className="lg:text-[13px] text-[8px] lg:my-2 my-1 ">Feeding India | June 7, 2024</p>
            <h1 className="lg:text-[24px] text-[14px] font-semibold">
              Bridging the Nutritional Gap:
            </h1>
            <h3 className="lg:text-[15px] text-[10px] lg:flex hidden">
              The impact of India’s Mid Day Meal Scheme and Feeding India’s
              Daily Feeding Program
            </h3>
            <p className="lg:text-[11px] text-[7px] lg:py-2 py-1">
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
         <div className="p-4 bg-black text-white w-1/3 rounded-[20px]">
            <img src={cardimg} alt="" className="w-full   lg:h-52 h-30" />
            <p className="lg:text-[13px] text-[8px] lg:my-2 my-1 ">Feeding India | June 7, 2024</p>
            <h1 className="lg:text-[24px] text-[14px] font-semibold">
              Bridging the Nutritional Gap:
            </h1>
            <h3 className="lg:text-[15px] text-[10px] lg:flex hidden">
              The impact of India’s Mid Day Meal Scheme and Feeding India’s
              Daily Feeding Program
            </h3>
            <p className="lg:text-[11px] text-[7px] lg:py-2 py-1">
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
          <div className="p-4 bg-black text-white w-1/3 rounded-[20px] ">
            <img src={cardimg} alt="" className="w-full  lg:h-52 h-30" />
            <p className="lg:text-[13px] text-[8px] lg:my-2 my-1 ">Feeding India | June 7, 2024</p>
            <h1 className="lg:text-[24px] text-[14px] font-semibold">
              Bridging the Nutritional Gap:
            </h1>
            <h3 className="lg:text-[15px] text-[10px] lg:flex hidden">
              The impact of India’s Mid Day Meal Scheme and Feeding India’s
              Daily Feeding Program
            </h3>
            <p className="lg:text-[11px] text-[7px] lg:py-2 py-1">
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
        <Button msg="See More" className="bg-[#EFEFEF] text-orange-500 rounded-lg m-4 border-2 border-black w-32"/>
        </div>
      </div>
    </div>
  );
}

export default Education;
