import React from 'react'

const CardSection = () => {
  return (
    <div className='p-10'>
        <section className='flex gap-5'>
            <div className='flex flex-col justify-between p-6 flex-2 bg-[url("./assets/card-image.jpg")] bg-cover h-80 rounded-4xl'>
                <h4 className='text-4xl'>Capital that grows</h4>
                <h6 className='w-87.5 text-[20px] font-light'>Earn passive income as your stablecoins are deployed into high-performing DeFi protocols.</h6>
            </div>

            <div className='flex flex-col justify-between p-5 flex-1 bg-[#2C2745] bg-cover h-80 rounded-4xl text-white '>
                <h4 className='text-4xl font-light '>Always Liquid, Always Stable</h4>
                <h6 className='text-[20px] font-light'>Stay fully dollar-pegged with instant access to your funds — no lockups or delays.</h6>
            </div>

            <div className='flex flex-col justify-between p-5 flex-1 bg-[#2C2745] bg-cover h-80 rounded-4xl text-white'>
                <h4 className='text-4xl w-47.5 font-light'>100% hands-free</h4>
                <h6 className='text-[20px] font-light'>No need to manage strategies manually. USD Bloom works in the background for you.</h6>
            </div>

        </section>
    </div>
  )
}

export default CardSection