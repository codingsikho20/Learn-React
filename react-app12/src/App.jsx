import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './component/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Random from './pages/Random'
import Course from './pages/Course'
import AnyCourse from './pages/AnyCourse'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      {/* <h1 className='text-5xl underline font-bold absolute right-170 top-70 text-green-500'>Lalaji</h1> */}
      {/* 
        <BrowserRouter>
          <About />
        </BrowserRouter> */}
        
       <BrowserRouter>
       <Navbar />
        <Routes>

          {/* normal route */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />

          {/* nested route */}
          <Route path='/men product' element={<Men />} />
          <Route path='/Women product' element={<Women />} />
          <Route path='/random/:courseId' element={<Random />} />

          {/* dynamic route */}
          <Route path='/course' element={<Course />} />
          <Route path='/course/anycourse' element={<AnyCourse />} />


          {/* not found route */}
          <Route path='/*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App