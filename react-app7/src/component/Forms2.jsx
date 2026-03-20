import React from 'react'

const Forms2 = () => {

    const submitHndler = (e) => {
        e.preventDefault(e)
        console.log("Form Submitted")
    }

    return (



        <div>
            <form onSubmit={(e) => {
        submitHandler(e)
      }}>
                <input type="text" placeholder="Enter your name" className="border-2 p-2 m-5"
                />
                <button className="bg-blue-700 p-5 py-3 rounded-lg scale-95"

                >Submit</button>
            </form>
        </div>
    )
}

export default Forms2