import React from 'react'

const Forms1 = () => {

  const submitHandler = (e) => {
    e.preventDefault(e)
    console.log("Form Submitted")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-800 text-white">
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder="Enter your name" className="border-2 p-2 m-5"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button className="bg-blue-700 p-5 py-3 rounded-lg scale-95">Submitl</button>
      </form>
    </div>
  )
}

export default Forms1
