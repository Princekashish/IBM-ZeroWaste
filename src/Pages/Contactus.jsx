import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
// import { SlLocationPin } from "react-icons/sl";
// import { FiPhoneCall } from "react-icons/fi";
// import { TfiEmail } from "react-icons/tfi";
import { location,mail,phone } from '../assets';
import { Button } from '../Components';
import { Link } from 'react-router-dom'

function Contactus() {
  const cardItem=[

    {
      title:"Address",
      content:"Elliott Ave, Parkville VIC 3052, Melbourne Canada",
      icon:location
    },
    {
      title:"Phone Number",
      content1:"+1 800 123 4567",
      content2:"+1 800 123 4567",
      icon:phone
    },
    {
      title:"Email",
      content1:"info@gmail.com ",
      content2:" contact@gmail.com",
      icon:mail
    }, 
  ]

  return (
    <div className=' p-4'>
       <div>
       <Link to='/'>

        <h1 className=' lg:text-xl text-sm font-semibold flex gap-2 items-center'>
          <FaArrowLeft/>
          Back
        </h1>
        </Link>
       </div>
       <div className='text-center'>
        <h1 className='lg:text-3xl text-xl font-medium text-orange-600'>Contact Us</h1>
      <h1 className='lg:text-5xl text-3xl font-sans font-bold'> Want to get in touch...?</h1>
     <h1 className='lg:text-3xl text-xl font-sans font-semibold mt-2'> We’d love to hear from you</h1>
       </div>

      <div className='flex justify-around p-2 lg:gap-0 gap-2 '>
        {
          cardItem.map((item,index)=>{
            return (
              <div key={index} className='bg-[#ECEBEB]  border-2 hover:border-[#952800] border-[#3E3E3E] flex flex-col justify-around items-center   lg:w-[336px] w-1/3 lg:h-[316px] h-[140px] lg:p-10  p-1 rounded-[4px]'>
                <div className='flex flex-col justify-center items-center lg:gap-6 gap-2'>
                <div className='bg-[#C1C1C1] lg:w-[83px] sm:w-[40px] w-[25px] lg:h-[83px] sm:h-[40px] h-[25px] p-1 flex items-center justify-center rounded-full'>
                 
                  <img src={item.icon} alt="logo"  className='lg:w-9 sm:w-5 w-3'/>
                  </div>
                <h1 className='font-semibold lg:text-2xl text-[11px]'>{item.title}</h1>
                </div>
                <div className='text-center lg:text-lg text-[10px]'>
                <h1>{item.content}</h1>
                <h1>{item.content1}</h1>
                <h1>{item.content2}</h1>
                </div>
              </div>
            )
          })
        }
      </div>


      <div className=' mb-20'>
        <h1 className='lg:text-[37px] text-[20px] font-semibold p-6'>
        Send a Message...
        </h1>
        <div className='flex justify-center  '>

        <form action="" className='     '>
           <div className='lg:flex  lg:flex-row  flex-col  lg:justify-between justify-center   lg:gap-3 gap-0'>
            <input type="text" placeholder='Your Name*' className='h-12  p-2  bg-[#E8E8E8] border-2 border-[#838383] rounded-[6px] lg:w-[450px]  sm:w-[400px] w-full'/>
            <input type="text" placeholder='Your Email*' className='h-12 p-2 lg:mt-0 mt-2 bg-[#E8E8E8]  border-2 border-[#838383] rounded-[6px] lg:w-[450px] sm:w-[400px] w-full ' />
           </div>
           <div className='lg:flex  lg:flex-row  flex-col  justify-between   lg:gap-3 gap-0 lg:mt-7 mt-2'>
            <input type="text" placeholder='state*' className='h-12  p-2  bg-[#E8E8E8] border-2 border-[#838383] rounded-[6px] lg:w-[450px] w-full'/>
            <input type="text" placeholder='Phone Number*' className='h-12 p-2 lg:mt-0 mt-2 bg-[#E8E8E8]  border-2 border-[#838383] rounded-[6px] lg:w-[450px] sm:w-[400px] w-full' />
           </div>
          <textarea name="" id="" placeholder='Enter your meassage...' className='lg:mt-7 mt-2  p-2 bg-[#E8E8E8]  border-2 border-[#838383] rounded-[6px] lg:w-[914px] sm:w-[400px]  w-full lg:h-[291px] h-[150px]'></textarea>
          
          <Button msg="SUBMIT "  className='p-2 m-2 ' />
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
