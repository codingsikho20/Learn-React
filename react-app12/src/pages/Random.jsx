import React from 'react'
import { useParams } from 'react-router-dom'

const Random = () => {

    const params = useParams()

    console.log(params)

  return (
    <div>
      <h1 className='text-5xl capitalize underline font-bold absolute right-150 top-70 text-green-500'> {params.courseId} Nothing else</h1>
    </div>
  )
}

export default Random
