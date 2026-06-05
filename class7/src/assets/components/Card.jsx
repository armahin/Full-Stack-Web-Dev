import React from 'react'

const Card = (props) => {
  return (
    <div className='card-appear bg-red-400 w-75 h-100 rounded-3xl flex flex-col items-center p-4 gap-1 m-3 transition-all duration-300 ease-out hover:scale-101'>
              <img 
              src= {props.image}
              alt="" 
              className='h-35 w-35 rounded-full object-center object-cover mb-1 border-4'
              />
              <h1 className='text-2xl font-medium text-white'>{props.title}</h1>
              <h3 className='text-lg font-light bg-yellow-50 px-3 mb-2 rounded-4xl'>{props.subtitle}</h3>
              <p className='text-center font-extralight mb-2 h-25'>{props.description}</p>
              <button onClick={props.delete} className='bg-red-300 px-2 rounded active:scale-95'>Delete</button>
          </div>
  )
}

export default Card