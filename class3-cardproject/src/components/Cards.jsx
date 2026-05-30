import React from 'react'

const Cards = (props) => {

  return (
    <div className='h-100 w-75 bg-white rounded-3xl m-4 flex flex-col items-center overflow-hidden'>

        
        <img src={props.coverImage} className='w-full h-35 rounded-3xl p-2 object-cover ' alt="" />
        <img src={props.profileImage}className='size-24 rounded-full -translate-y-1/2 border-3 border-white object-cover' alt="" />
            <h1 className='font-bold text-2xl -mt-10'>{props.fullName}</h1>
            <h4 className='font-light'>{props.title}</h4>
            <div className='flex w-[95%] justify-between items-center mt-6  rounded-2xl px-5 bg-gray-100 drop-shadow'>
                <div className='flex flex-col justify-center items-center p-3'>
                    <h3 className='font-bold'>{props.likesCount}</h3>
                    <p className='font-light'>Likes</p>
                </div>
                <div className='flex flex-col justify-center items-center p-3'>
                    <h3 className='font-bold'>{props.postCount}</h3>
                    <p className='font-light'>Posts</p>
                </div>
                <div className='flex flex-col justify-center items-center p-3'>
                    <h3 className='font-bold'>{props.viewsCount}</h3>
                    <p className='font-light' >Views</p>
                </div>
            </div>
            <div className='bg-amber w-full h-full flex justify-center items-center gap-10'>
                <i class="ri-instagram-line"></i>
                <i class="ri-twitter-x-fill"></i>
                <i class="ri-threads-line"></i>
            </div>

    </div>
  )
}

export default Cards