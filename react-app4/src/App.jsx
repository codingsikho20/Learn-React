import React from 'react'
import Card from './Component/Card.jsx'
import Button from './Component/Button.jsx'

const App = () => {

  
  return (
    <div className='p-3 h-screen bg-black'>
      
      <Card user = 'Nandani' age={30}/>
      <Card user = 'Manish' age={34}/>
      <Card user = 'Chandani' age={54}/>
      <Card user = 'Baby' age={54}/>

      <Button text='Buy Now'/>
      <Button text='Explore now'/>

    </div>
  )
}

export default App
