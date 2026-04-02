import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between px-8 py-6 bg-pink-900 text-white'>
            <h2>Navbar</h2>
            <input type=" text" className='border-2' />
            <div className='flex gap-10'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>
                <Link to='/men product'>Men</Link>
                <Link to='/women product'>Women</Link>
                <Link to='/course'>Courses</Link>

            </div>
        </div>
    )
}

export default Navbar
