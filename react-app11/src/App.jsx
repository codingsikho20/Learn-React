import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  //1
    // const [number1, setNumber1] = useState(0)
    // const [number2, setNumber2] = useState(0)
    // const [number3, setNumber3] = useState(0)
  
    // 2
  // const [counter, setCounter] = useState(0)
  // const [tittle, setTittle] = useState('')


  // 3
  // useEffect(function () {
  //   console.log('useEffect chal rha hai')
  // },[counter])

  // useEffect(function () {
  //   console.log('useEffect chal rha hai')
  // },[number1])

  // 4
  // const [allPokemon, setAllPokemon] = useState([])

  // const getData = async () =>{
  //   const response = await axios.get('Enter your API URL here')
    
  //   setAllPokemon(response.data.results)
  // }

  // useEffect(function(){
  //   getData()
  // }, [])

  // 5

  const [num, setNum] = useState(0)

  const [username, setUsername] = useState('')  
  
const getData = async () => {
    const response = await axios.get('Enter your API URL here')
    setUsername(response.data.results[0].name.first)+" "+(response.data.results[0].name.last);
}

  useEffect(function(){
    getData()
  }, [num])

  return (
    <div>
      {/* <input value={tittle} onChange={(e) => {
        setTittle(e.target.value)
      }} type="text" />
      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Increase</button> */}
{/* 
      <h1>{number1}</h1>
      <button onClick={()=>{
        setNumber1(Math.floor(Math.random()*100))
      }}>Change Number1</button>

      <h1>{number2}</h1>
      <button onClick={()=>{
        setNumber2(Math.floor(Math.random()*100))
      }}>Change Number2</button>

      <h1>{number3}</h1>
      <button onClick={()=>{
        setNumber3(Math.floor(Math.random()*100))
      }}>Change Number3</button> */}

    {/* 4. <button onClick={getData}>Click me Guys</button>
    {allPokemon.map(function(elem, idx){
      return <h1>{elem.name}</h1>
    })} */}


      {username}
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>Click me</button>

    </div>
  )
}

export default App
