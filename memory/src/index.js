import React from 'react'
import ReactDOM from 'react-dom'
import './components/tile.css'
import Memory from './components/memory'

export const MemoryContext = React.createContext()

function Main() {

  const globalStates = {
    flippedCount: 0,
    flippedTiles: { first: null, second: null }
  }

  return (
    <MemoryContext.Provider value={globalStates} >
      <Memory />
    </MemoryContext.Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))