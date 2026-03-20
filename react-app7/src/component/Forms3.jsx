import React, { useState } from 'react'

const Forms3 = () => {


    const [title, setTitle] = useState('')

    const [allUsers, setallUsers] = useState([''])

    const [email, setEmail] = useState([''])

    const submitHandler = (e) => {
        e.preventDefault(e)

        const oldUsers = [...allUsers]
        oldUsers.push(title, email)

        setallUsers(oldUsers)

        console.log(oldUsers)

        setTitle('')
        setEmail('')
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-800 text-white">
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <input type="text"
                    placeholder="Enter name"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    className="p-5 py-4 border-2" />

                <input type="text"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    className="p-5 py-4 border-2" />

                <button className="m-5 p-4 bg-blue-900 rounded-2xl">Submit</button>
            </form>

            {allUsers.map(function (elem, idx){
                return <h4 key = {idx}>{elem}</h4>
            })}
        </div>
    )
}

export default Forms3
