import Item from './Components/Item/Item'
import { cardsArrow } from './data'
import './App.css'

function App() {

  return (
    <div style={{display: 'flex', gap: 20, padding: 20}}>
      {cardsArrow.map((card) => (<Item key ={card.name} {...card} />))}
    </div>
  )
}

export default App
