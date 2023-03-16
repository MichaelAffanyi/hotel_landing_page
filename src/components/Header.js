import React from 'react'
import Arrow from '../assets/arrow.svg'

function Header() {
  return (
    <div className='bg-[#121212] w-full h-60 text-white flex justify-center'>
        <div className='flex justify-between w-[1140px] mt-8'>
            <span className='w-[585px] h-[134px] font-bold text-5xl uppercase leading-[133.02%]'>Open the door for a spacious living -</span>
            <div>
                <div className='flex items-center justify-between cursor-pointer w-[238px] h-11 border-b-2'>
                    <span>Book a hotel service</span>
                    <img src={Arrow} />
                </div>
                <div className='flex items-center justify-between cursor-pointer w-[238px] h-11 border-b-2'>
                    <span>Book a hotel service</span>
                    <img src={Arrow} />
                </div>
                <div className='flex items-center justify-between cursor-pointer w-[238px] h-11 border-b-2'>
                    <span>Book a hotel service</span>
                    <img src={Arrow} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header