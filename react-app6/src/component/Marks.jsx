import React, { useState } from 'react'

const Marks = () => {

    const [marks, setMarks] = useState([60, 55, 89, 12, 29, 90, 92.78])

    function graceStudent(){

        const newMarks = marks.map(function(elem){
            return elem + 5
        })
        setMarks(newMarks)
    }

  return (
    <div>
      {marks.map(function(elem, idx){
        return <h1 key={idx}>Student {idx + 1} = {elem} ({elem>33?'PASS':'FALL'})</h1>
      })}

        <button onClick={graceStudent}>Grace Student</button>
    </div>
  )
}

export default Marks
