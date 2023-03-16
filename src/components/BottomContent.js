import React from 'react'
import star from '../assets/Star.svg'
import restaurant from '../assets/restaurant.svg'
import spa from '../assets/spa.svg'
import bestroom from '../assets/bestroom.svg'
import lougeBar from '../assets/louge_bar.svg'

function BottomContent() {
  return (
    <div className='w-full h-[681px] flex'>
        <div className='w-[349px] mt-[220px] ml-[151px]'>
            <span className='font-bold text-3xl'>CLASSIC ROOMS AND INTERIOR</span>
            <div className='flex gap-2 mt-7'>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
            </div>
            <span className='text-lg font-medium opacity-60'>Excellent 5000+reviews</span>
            <div className='flex relative mt-20'>
                <img src={require('../assets/person-1.png')} className='absolute left'/>
                <img src={require('../assets/person-2.png')} className='absolute left-[42px]'/>
                <img src={require('../assets/person-3.png')} className='absolute left-[84px]'/>
                <img src={require('../assets/person-4.png')} className='absolute left-[126px]'/>
                <img src={require('../assets/person-5.png')} className='absolute left-[167px]'/>
            </div>
            <span className='text-lg font-medium opacity-60 mt-[79px] absolute'>Peoples successsfully got this<br/> dream place</span>
        </div>
        <div className='h-[520px] w-[718px] grid grid-cols-2 gap-10 -mt-10 ml-24'>
            <div className='bg-white shadow-2xl h-60 w-[339px] flex justify-center'>
                <div className='h-[110px] w-[293px] mt-[41px]'>
                    <img src={restaurant} className='mb-[14px]'/>
                    <span className='flex text-[#292929] text-2xl mb-[14px]'>RESTAURANT</span>
                    <span className='text-[#292929] opacity-30 font-medium'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do</span>
                </div>
            </div>
            <div className='bg-white h-60 w-[339px] flex justify-center'>
                <div className='h-[110px] w-[293px] mt-[41px]'>
                    <img src={spa} className='mb-[14px]'/>
                    <span className='flex text-[#292929] text-2xl mb-[14px]'>RESTAURANT</span>
                    <span className='text-[#292929] opacity-30 font-medium'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do</span>
                </div>
            </div>
            <div className='bg-white h-60 w-[339px] flex justify-center'>
                <div className='h-[110px] w-[293px] mt-[41px]'>
                    <img src={bestroom} className='mb-[14px]'/>
                    <span className='flex text-[#292929] text-2xl mb-[14px]'>RESTAURANT</span>
                    <span className='text-[#292929] opacity-30 font-medium'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do</span>
                </div>
            </div>
            <div className='bg-white h-60 w-[339px] flex justify-center'>
                <div className='h-[110px] w-[293px] mt-[41px]'>
                    <img src={lougeBar} className='mb-[14px]'/>
                    <span className='flex text-[#292929] text-2xl mb-[14px]'>RESTAURANT</span>
                    <span className='text-[#292929] opacity-30 font-medium'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomContent