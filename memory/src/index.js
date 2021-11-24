import React from 'react'
import ReactDOM from 'react-dom'
import './components/tile.css'
import { Memory } from './components/memory'
import { useState } from 'react/cjs/react.development'

export const MemoryContext = React.createContext()
/**
 * -board: to keep track of which tiles are flipped
 * -flipable: to disable tiles when matched
 * -tilesFlipped: currently flipped tiles
 * -flippedCounter: when to check for matches and when game ends
 * 
 * 
 * @returns Memory component with context values passed down to child components */
function Main() {
  const [board, setBoard] = useState([false, false, false, false, false, false,
  false, false, false, false, false, false])
  const [flipable, setFlipable] = useState([true, true, true, true, true, true, true, true, true, true, true, true])
  const [tilesFlipped, setTilesFlipped] = useState({
    first: null,
    second: null
  })
  const [flippedCounter, setFlippedCounter] = useState(0)
  const globalStates = {
    board: board,
    flipable, flipable,
    setFlipable: setFlipable,
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