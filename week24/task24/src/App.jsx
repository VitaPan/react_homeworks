import { useState } from 'react'
import Item from './Components/Item/Item'
import { cardsArrow } from './data'
import './App.css'

function App() {

  const [state, setState] = useState(null);

  function handleClick(cardName) {
    setState(cardName)
  };


  return (
    <div style={{display: 'flex', gap: 20, padding: 20}}>
      {cardsArrow.map((card) => (<Item key ={card.name} 
      {...card} active={state === card.name}
      onClick={() => handleClick(card.name)} />))}
    </div>
  )
}

export default App
