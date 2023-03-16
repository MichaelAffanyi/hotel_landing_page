import React from 'react'

function MiddleContent() {
  return (
    <div className='w-full mt-40'>
        <div className='w-[583px] flex gap-4 flex-col mx-auto text-center'>
            <span className='text-[45px] font-bold'>Why You Should <span className='text-[#FF7500]'>Stay Here</span></span>
            <span className='w-[475px] mx-auto text-[#292929] opacity-40'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</span>
        </div>
        <div className='h-[636px] mt-28 flex justify-between'>
            <div className='w-[482px] h-full flex flex-col justify-between ml-[151px]'>
                <div className='w-full h-[636px]'>
                    <div className='w-[50px] h-[50px] rounded-[50%] bg-[#FF7500] flex justify-center items-center text-white font-bold'>1</div>
                    <div className='mt-[24px] text-[#292929]'>
                        <span className='text-2xl font-bold'>Provide the best choice of Room. </span><br/>
                        <span className='mt-[14px] opacity-40'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</span>
                    </div>
                </div>
                <div className='w-full h-[636px]'>
                    <div className='w-[50px] h-[50px] rounded-[50%] bg-[#FF7500] flex justify-center items-center text-white font-bold'>2</div>
                    <div className='mt-[24px] text-[#292929]'>
                        <span className='text-2xl font-bold'>Low price with Best Quality</span><br/>
                        <span className='mt-[14px] opacity-40'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</span>
                    </div>
                </div>
                <div className='w-full h-[636px]'>
                    <div className='w-[50px] h-[50px] rounded-[50%] bg-[#FF7500] flex justify-center items-center text-white font-bold'>3</div>
                    <div className='mt-[24px] text-[#292929]'>
                        <span className='text-2xl font-bold'>Restaurant Service</span><br/>
                        <span className='mt-[14px] opacity-40'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</span>
                    </div>
                </div>
            </div>
            <div className='w-[482px] h-full relative'>
                <img src={require('../assets/aside.png')} className='w-full h-full object-cover' />
                <div className='z-10 w-[212px] h-[61px] bg-white flex items-center gap-3 shadow-2xl absolute -top-8 right-44 rounded-lg'>
                    <div className='ml-5'>
                        <img src={require('../assets/cody.png')} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-bold text-[#292929]'>Cody Fisher</span>
                        <span className='text-[#29292966] accent-[#29292966]'>give rating <span className='text-[#FF7500]'>4.5</span></span>
                    </div>
                </div>
                <div className='z-10 w-[212px] h-[61px] bg-white flex items-center gap-3 shadow-2xl absolute top-28 -left-36 rounded-lg'>
                <div className='ml-5'>
                        <img src={require('../assets/albert.png')} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-bold text-[#292929]'>Albert Flores</span>
                        <span className='text-[#29292966] accent-[#29292966]'>give rating <span className='text-[#FF7500]'>4.5</span></span>
                    </div>
                </div>
                <div className='z-10 w-[212px] h-[61px] bg-white flex items-center gap-3 shadow-2xl absolute -bottom-8 left-20 rounded-lg'>
                <div className='ml-5'>
                        <img src={require('../assets/devon.png')} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-bold text-[#292929]'>Devon Lane</span>
                        <span className='text-[#29292966] accent-[#29292966]'>give rating <span className='text-[#FF7500]'>4.5</span></span>
                    </div>
                </div>
                <div className='z-10 w-[439px] h-[219px] absolute top-52 -left-48'>
                    <img src={require('../assets/bg-main.png')} className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleContent