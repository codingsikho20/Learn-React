import React from 'react'

const Card = (props) => {
  return (
    <div  className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl p-5 px-8 text-center flex item-center flex-col bg-white text-black'>
      <img className='h-24 w-24 rounded-full mx-auto object-cover object-center' src={props.elem.imageURL} alt="" />
      <h1 className='text-2xl font-bold mt-2'>{props.elem.userName}</h1>
      <h5 className='text-blue-500 text-lg font-semibold my-2'>{props.elem.userRole}</h5>
      <p className='text-sm font-medium leading-tight'>{props.elem.userDesc}</p>
      <button onClick={() => {
        props.deleteHandler(props.idx)
      }} className='px-1 py-2 mt-4 rounded text-xs cursor-pointer active:scale-95 bg-red-500 text-white'>Remove</button>

    </div>
  )
}

export default Card
