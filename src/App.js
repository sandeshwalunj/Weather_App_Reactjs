import React, { useState } from 'react'
import Weather from './wheather'

const App = () => {
  const [inputlocation,setInputlocation]=useState('')
  const [selectedLocation,setSelectedlocation]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSelectedlocation(inputlocation)
  }
  return (
  <div className='container mx-auto my-8 py-8 px-4 border-2 border-green-600 rounded-lg w-fit'>
<h1 className='text-blue-700 text-xl'>
  Wheather Fetching Application
</h1>
<form onSubmit={handleSubmit}>
<input type='text' className='border-2 border-indigo-600 rounded-lg my-4 mx-auto text-sm font-bold' value={inputlocation} onChange={(e)=>setInputlocation(e.target.value)} />
<button type='submit' className='bg-slate-500 rounded-lg mx-2'>Get Data</button>
</form>
{selectedLocation && <Weather location={selectedLocation}/>}
    </div>
  )
}

export default App