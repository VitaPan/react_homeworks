import Item from './Components/Item/Item'
import { CardsArrow } from './data'
import './App.css'

function App() {

  return (
    <div style={{display: 'flex', gap: 10}}>
      {CardsArrow.map((card) => (<Item key ={card.name} {...card} />))}
    </div>
  )
}

export default App
