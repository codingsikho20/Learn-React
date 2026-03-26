import React, {useState} from 'react'


const useForm = () => {

    const [userName, setUserName] = useState('')
    const [userRole, setUserRole] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [userDesc, setUserDesc] = useState('')

    const [allUsers, setAllUsers] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

        const oldUsers = [...allUsers]
        oldUsers.push({ userName, userRole, imageURL, userDesc })
        console.log(oldUsers)

        setAllUsers(oldUsers)

        setUserName('')
        setUserRole('')
        setImageURL('')
        setUserDesc('')
    }

    const deleteHandler = (idx) =>{
        const copyUsers = [...allUsers]
        copyUsers.splice(idx, 1)

        setAllUsers(copyUsers)
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

            <div>
                
            </div>
        </div>

    )
}

export default useForm
