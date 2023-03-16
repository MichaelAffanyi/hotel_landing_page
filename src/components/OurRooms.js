import React from 'react'

function OurRooms() {
  return (
    <div className='w-full h-[847px] mt-28'>
        <div className='flex flex-col items-center gap-4'>
            <span className='font-bold text-2xl text-[#292929]'>Our Room</span>
            <span className='font-bold text-[#292929] text-5xl'>A World of <span className='text-[#FF7500]'>Choice</span></span>
            <span className='text-[#292929] opacity-40 text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do<br/> amet sint. Velit officia consequat.</span>
        </div>
        <div className='w-[1140px] h-[620px] mx-auto mt-10 flex gap-10'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <div className='w-[320px] h-[222px]'>
                        <img src={require('../assets/room_with_view.png')} className='w-full h-full object-cover' />
                    </div>
                    <span className='mt-3 text-[#292929] opacity-40 text-sm'>3 GUESTS</span>
                    <span className='text-[#292929] text-xl font-semibold'>Room with View</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='w-[320px] h-[222px]'>
                        <img src={require('../assets/small_room.png')} className='w-full h-full object-cover' />
                    </div>
                    <span className='mt-3 text-[#292929] opacity-40 text-sm'>1 GUESTS</span>
                    <span className='text-[#292929] text-xl font-semibold'>Small Room</span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='w-[420px] h-[548px]'>
                    <img src={require('../assets/luxury_room.png')} className='w-full h-full object-cover' />
                </div>
                <span className='mt-3 text-[#292929] opacity-40 text-sm'>6 GUESTS</span>
                <span className='text-[#292929] text-xl font-semibold'>Luxury Room</span>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <div className='w-[320px] h-[222px]'>
                        <img src={require('../assets/apartment.png')} className='w-full h-full object-cover' />
                    </div>
                    <span className='mt-3 text-[#292929] opacity-40 text-sm'>5 GUESTS</span>
                    <span className='text-[#292929] text-xl font-semibold'>Appartment</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='w-[320px] h-[222px]'>
                        <img src={require('../assets/medium_room.png')} className='w-full h-full object-cover' />
                    </div>
                    <span className='mt-3 text-[#292929] opacity-40 text-sm'>4 GUESTS</span>
                    <span className='text-[#292929] text-xl font-semibold'>Medium Room</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurRooms