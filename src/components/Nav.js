import React from 'react'
import Logo from './Logo'

function Nav() {
  return (
    <div className='bg-[#121212] w-full h-36 text-white flex justify-center items-center'>
      <div className='w-[1140px] h-12 flex justify-between items-center mx-auto'>
        <Logo />
        <ul className='flex gap-11 ml-20'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Service</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Room</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <button className='border-2 px-[47px] py-[14px] font-bold'>Book Now</button>
      </div>
    </div>
  )
}

export default Nav