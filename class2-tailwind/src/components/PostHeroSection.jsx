import React from 'react'

const PostHeroSection = () => {
  return (
    <div>
        <section className='px-10 w-screen h-[40vh] flex justify-between items-center'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-6xl font-semibold'>What is USD Bloom?</h1>
                <a href="#" className='w-45 text-center bg-[#2C2745] text-white text-[16px] px-8 py-3 rounded-3xl font-light'>Explore Now</a>
            </div>
            <div>   
                <h3 className='w-112.5 text-3xl mr-6 text-[#2C2745] font-light' >
                    USD Bloom is a yield-bearing stablecoin that helps your capital grow while staying pegged to the U.S. dollar.
                </h3>
            </div>
        </section>

    </div>
  )
}

export default PostHeroSection