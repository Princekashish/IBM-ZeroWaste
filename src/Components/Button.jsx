import React from 'react'

function Button({msg}) {
  return (
    <div>
      <button
      className='bg-[#E6511A]  w-36 h-12 rounded-full text-white font-semibold' 
      >{msg}</button>
    </div>
  )
}

export default Button 