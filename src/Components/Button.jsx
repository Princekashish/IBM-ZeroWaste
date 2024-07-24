import React from 'react'

function Button({msg, className=""}) {
  return (
    <div>
      <button
      className={`${className} bg-[#E6511A]  lg:w-36 lg:h-12 rounded-full  font-semibold`}
      >{msg}</button>
    </div>
  )
}

export default Button 