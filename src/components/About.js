import React from 'react'

function About() {
  return (
    <div className='w-full h-[681px] mt-24 flex'>
        <div className='h-full w-[60%] bg-[#121212] text-white flex items-center'>
            <div className='h-[382px] w-[377px] ml-[154px] flex flex-col gap-4'>
                <span className='font-bold text-[45px]'>ABOUT US</span>
                <div className='w-[174px] h-[4px] bg-[#FF7500]'></div>
                <span className='font-medium text-lg opacity-30 mt-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim.</span>
                <span className='font-medium text-lg opacity-30 mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do</span>
                <button className='w-[156px] h-[54px] rounded-[27px] bg-[#FF7500] mt-3'>Explore</button>
            </div>
        </div>
        <div className='h-full w-[40%]'>
            <img src={require('../assets/about_us.png')} className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default About