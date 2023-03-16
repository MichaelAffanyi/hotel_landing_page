import React from 'react'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import youtube from '../assets/youtube.svg'

function Footer() {
  return (
    <div className='flex flex-col gap-7 w-full h-[434px] bg-[#121212] px-[150px] text-white'>
        <div className='w-full flex justify-between mt-[59px]'>
            <div className='flex flex-col gap-5'>
                <span className='font-semibold text-2xl mb-1'>Quick link</span>
                <span>Home</span>
                <span>Services</span>
                <span>About us</span>
                <span>Contact</span>
            </div>
            <div className='w-[335px] flex flex-col text-center gap-2'>
                <span className='text-white font-semibold text-3xl'>Get in Touch</span>
                <span className='text-white font-medium text-base opacity-30'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                <div className='w-full flex mt-5'>
                    <input placeholder='Enter email'  className='w-[237px] h-[54px] border-2 bg-transparent rounded-lg placeholder:pl-[20px] placeholder:opacity-30'/>
                    <button className='w-[108px] h-[54px] rounded-lg bg-[#FF6B00] -ml-4'>Subscribe</button>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <span className='font-semibold text-2xl mb-1'>Useful</span>
                <span>Privacy policy</span>
                <span>Legal</span>
                <span>FAQ</span>
                <span>Blogs</span>
            </div>
        </div>
        <div className='w-full h-[1px] bg-white opacity-10'></div>
        <div className='relative text-center'>
            <span>Copywrite goes to - Breakdance.com</span>
            <div className='absolute right-0 top-0 flex gap-6'>
                <img src={twitter} />
                <img src={youtube} />
                <img src={facebook} />
            </div>
        </div>
    </div>
  )
}

export default Footer