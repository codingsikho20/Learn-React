import React from 'react'

const Card = (props, user) => {

    console.log();

  return (
    <div className='bg-yellow-500 m-2 rounded px-5 py-3 w-fit '>
      <h1 className='text-2xl font-semibold'>
        {props.user}
      </h1>
    </div>
  )
}

export default Card
