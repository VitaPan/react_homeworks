import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{`Вы кликнули ${count} раз`}</p>
      <button onClick={() => {setCount(count+1)}}>Клик!</button>
    </>
  )
}

export default App
