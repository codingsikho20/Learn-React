import React from 'react'

const Button = () => {

    const btnClick = ()=>{
        console.log("Button Clicked")
    }

    btnClick()

  return (
    <div>
        <button
        onClick={function(){
            btnClick()
        }}
         className='active:scale-95 py-5 px-20 bg-red-600 text-2xl font-bold text-white rounded-lg m-20'>Click Me</button>
    </div>
  )
}

export default Button
