import React from 'react'
import ReactDOM from 'react-dom'
import './components/tile.css'
import { Memory, Tile } from './components/memory'
import { useState } from 'react/cjs/react.development'

export const MemoryContext = React.createContext()

function Main() {
  const [board, setBoard] = useState([false, false, false, false, false, false,
  false, false, false, false, false, false])

  const [tilesFlipped, setTilesFlipped] = useState({
    first: null,
    second: null
  })
  const [flippedCounter, setFlippedCounter] = useState(0)

  const globalStates = {
    board: board,
    setBoard: setBoard,
    tilesFlipped: tilesFlipped,
    setTilesFlipped: setTilesFlipped,
    flippedCounter: flippedCounter,
    setFlippedCounter: setFlippedCounter
  }

  return (
    <MemoryContext.Provider value={globalStates}>
      <Memory />
    </MemoryContext.Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))