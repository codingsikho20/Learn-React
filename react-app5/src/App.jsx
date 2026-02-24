import React from 'react'
import Navbar from './component/Navbar'
import Nandani from './component/Nandani'
import Manish from './component/Manish'
import Button from './component/Button'

const App = () => {

  const data1 = {
    name : 'Nandani',
    age : 22,
    gender: "Female"
  }

  const data2 = {
    name : 'Manish',
    age : 25,
    gender: "Male"
  }

  const data3 = {
    name : 'Arica',
    age : 8,
    gender: "Female"
  }

  const data4 = {
    name : 'Raja',
    age : 18,
    gender: "Male"
  }

  return (
    <div>
      <Navbar title="Nandani" color='red' link={['Home', 'About', 'Contact', 'Services']} />
      <Navbar title="Manish" color='blue' link={['Lalka', 'Kolkta', 'Mumbai', 'Rajaji']} />
      <Navbar title="Arica" color='green' link={['lagao', 'kuch bhi', 'kuch aur', 'kuch aur bhi']} />
      <Navbar title="Alice" color='purple' link={['Home', 'About', 'Contact', 'Services']} />

      {data3.gender == 'Female' ? <Manish/> : <Nandani/>}

      <Button/>

    </div>
  )
}

export default App
