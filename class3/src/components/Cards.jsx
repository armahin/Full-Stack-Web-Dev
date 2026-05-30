import React from 'react'
import Button from './Button.jsx'

const Cards = (props) => {
    console.log(props)
  return (
    <div>
      <div className={`h-100 w-75 bg-amber-200 p-10 rounded-3xl m-5 flex justify-center items-center flex-col`} >
        <h1 className='text-amber-50 text-4xl font-extrabold'>
            {props.name}
        </h1>
        {<Button name="Click"/>}
      </div>
    </div>
  )
}

export default Cards``