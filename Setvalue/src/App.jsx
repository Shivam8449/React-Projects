import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const maxCount = 20
  const minCount =0
  const addValue = () => {
    if (count < maxCount){
      setCount(count+1)
    }
  }
  const Remove = () => {
    if(count > minCount){
      setCount(count-1)
    }
  }
  return (
    <>
      <h1>value: {count} </h1>
      <button onClick={addValue}>increase</button>
      <br />
      <button onClick={Remove}>decrease</button>
    </>
  )
}

export default App
