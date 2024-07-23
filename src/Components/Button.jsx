import React from 'react'

function Button({msg, className=""}) {
  return (
    <div>
      <button
      className={`${className} bg-[#E6511A]  w-36 h-12 rounded-full text-white font-semibold`}
      >{msg}</button>
    </div>
  )
}

export default Button 