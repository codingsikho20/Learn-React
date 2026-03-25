import React, { useState } from 'react'
import Card from './Card'

const Forms = () => {

    const [userName, setUserName] = useState('')
    const [userRole, setUserRole] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [userDesc, setUserDesc] = useState('')

    // localStorage.clear() // to clear local storage

    const localData = JSON.parse(localStorage.getItem('all-users')) || []

    const [allUsers, setAllUsers] = useState(localData)


    const submitHandler = (e) => {
        e.preventDefault()

        const oldUsers = [...allUsers]

        oldUsers.push({ userName, userRole, imageURL, userDesc })

        setAllUsers(oldUsers)
        localStorage.setItem('all-users', JSON.stringify(oldUsers))

        setUserName('')
        setUserRole('')
        setImageURL('')
        setUserDesc('')
    }

    const deleteHandler = (idx) =>{
        const copyUsers = [...allUsers]

        const conf = confirm('Are you sure you want to delete this user?')

        if(conf){
            copyUsers.splice(idx, 1)
        }else{
            alert('User not deleted')
        }

        

        setAllUsers(copyUsers)
        localStorage.setItem('all-users', JSON.stringify(copyUsers))
    }

    return (
        <div
            className='h-screen bg-black text-white'>

            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='px-2 py-10 flex-wrap justify-center'>

                <input
                    value={userName}
                    required
                    onChange={(e) => {
                        setUserName(e.target.value)

                    }}
                    className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
                    type="text"
                    placeholder='Enter your name' />

                <input
                    value={imageURL}
                    required
                    onChange={(e) => {
                        setImageURL(e.target.value)
                    }}
                    className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
                    type="text"
                    placeholder='Image URL' />

                <input
                    value={userRole}
                    required
                    onChange={(e) => {
                        setUserRole(e.target.value)
                    }}
                    className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
                    type="text"
                    placeholder='Enter Role' />

                <input
                    value={userDesc}
                    required
                    onChange={(e) => {
                        setUserDesc(e.target.value)
                    }}
                    className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
                    type="text"
                    placeholder='Enter Description' />

                <button
                    className='px-5 py-2 text-xl active:scale-95 font-semibold bg-emerald-700 rounded m-2 w-[92%]'
                >Create User</button>
            </form>

            <div className="px-4 py-10 flex flex-wrap gap-4">

                {allUsers.map(function(elem, idx){
                return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>

                })}
            </div>
        </div>
    )
}

export default Forms