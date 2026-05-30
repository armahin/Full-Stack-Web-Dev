import React from 'react'

const Button = (props) => {
    console.log(props.name)
  return (
    <div className='px-20 py-1 bg-emerald-500 text-white rounded m-4 w-fit h-fit '> 
        {props.name}
    </div>
  )
}

export default Button