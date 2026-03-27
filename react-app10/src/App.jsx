import React, { useState } from 'react'
import axios from 'axios'
import User from './component/User'

const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    setAllData(response.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div className='all-cards'>
        {allData.map(function (elem, idx) {
          return <div key={idx}>
            <User elem={elem}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
