import React from 'react'

const HeroSection = () => {
  return (
    <div className="px-10">
    <div className='bg-[url("./assets/img.jpg")] bg-cover h-[80vh] w-full rounded-3xl flex flex-col text-center items-center pt-30 gap-5'>
        <h1 className='text-7xl font-semibold'>Where Money Grows</h1>
        <h3 className='w-92.5 text-[20px] font-extralight'>A programmable, utility-driven stable token designed for native value accural and seamless integration into DeFi</h3>
        <a href="#" className='bg-black text-white text-[14px] px-4 py-2 rounded-3xl font-light hover:rotate-6 transition-all duration-200 ease-in-out'>Try it now</a>
    </div>
    </div>
  )
}
export default HeroSection