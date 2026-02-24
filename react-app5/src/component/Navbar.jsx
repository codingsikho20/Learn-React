import React from 'react'

const Navbar = (props) => {

     console.log(props.color);
     
         
  return (
    <div style={{backgroundColor: props.color}}  className='bg-pink-600 mb-2 flex justify-between items-center text-white px-5 py-3'>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <div className='flex gap-10'>
        {props.link.map (function(elem, idx){

            return <h4 key={idx}>{elem}</h4>
        })}
      </div>
    </div>
  )
}

export default Navbar
