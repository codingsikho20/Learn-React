import React from 'react'

const Button = (props) => {

    let a = props;
  return (
    <div className='w-fit text-lg font-bold bg-emerald-600 px-4 py-2 rounded m-2 text-white'>
      {props.text}
    </div>
  )
}

export default Button
