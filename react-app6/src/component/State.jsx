import React, {useState} from 'react'

const State = () => {

  const [king, setKing] = useState('King of Manish ji')
  const [queen, setQueen] = useState('Queen of Nandani ji')

  const changingKing = () =>{
    setKing('King of Manish Kumar ji')
  }

  const changingQueen = () =>{
    setQueen('Queen of Chandani ji')
  }

  return (
    <div>
    
        <h1>{king} X {queen}</h1>   
        <button onClick={changingKing}>Change King</button> 
        <button onClick={changingQueen}>Changing Queen</button>
    </div>
  )
}

export default State