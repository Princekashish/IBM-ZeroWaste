import React from 'react'
import { logo } from '../../assets'
import {Link} from "react-dom"
import {Button} from '../index'

function Navbar() {

  const navItems=[
    {
      name:"Home",
      link:"/"
    },
    {
      name:"About",
      link:"/about"
      },
      {
        name:"Testimanials",
        link:"/testimonials"
      },
      {
        name:"Contact",
        link:"/contact"
        }

  ]

  return (
    <div className=' p-6 flex justify-between items-center w-full'>
      <div>
        <img src={logo} alt="logo" className='max-h-14  ' />
      </div>
      <div className='flex w-1/2 items-center '> 
      <div className=' flex  justify-around w-full '>
        {
          navItems.map((item,index)=>{
            return(
              <div key={index} className='font-bold text-xl ]cursor-pointer text-[#484848]'>
                <h4>{item.name}</h4>
              </div>
            )
          })
        }
      </div>
      <div>
        <Button msg="LOGIN"/>
      </div>
      </div>
    </div>
  )
}

export default Navbar
