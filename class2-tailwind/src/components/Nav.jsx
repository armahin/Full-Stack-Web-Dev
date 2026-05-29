import React from 'react'

const Nav = () => {
  return (
    <div className='h-20 w-full flex justify-between items-center px-10'>
        <h1 className='text-2xl'>BloomFi</h1>
        <div className='flex gap-8'>
            <a href="$">USDBloom</a>
            <a href="$">Busniess</a>
            <a href="$">Treasury</a>
            <a href="$">Developers</a>
            <a href="$">Join Us</a>
        </div>
        <a href="#" className='bg-black text-white text-[14px] px-4 py-2 rounded-3xl font-light'>Launch BETA</a>

    </div>
  )
}

export default Nav