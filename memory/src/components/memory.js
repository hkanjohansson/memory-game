import React, { useState, useEffect, useContext } from 'react'
import './tile.css'
import { MemoryContext } from '../index'

function Image() {
  return (
    <img className='image' src={'./logo192.png'} />
  )
}

export function Tile({ id, flippedNumber }) {
  // Should these two be put in a context???
  const image = <Image />
  const [tileValue, setTileValue] = useState(image)
  /////////////////////////////////////////////////////
  // Should everything concerning flip events be put in the Memory component? And tile is just the object?
  const contextValues = useContext(MemoryContext)
  let tempBoard = [...contextValues.board]

  const handleClick = () => {  
    console.log(tempBoard)
    if (!tempBoard[id]) { // TODO : Change to board[id]
      tempBoard[id] = true
      setTileValue(flippedNumber)
      contextValues.setFlippedCounter(prev => prev + 1)
      contextValues.setBoard([...tempBoard])
    } else {
      tempBoard[id] = false
      setTileValue(image)
      contextValues.setFlippedCounter(prev => prev - 1)
      contextValues.setBoard([...tempBoard])
    }

    // Check which of the tiles to be set
    if (contextValues.flippedCounter % 2 === 0) {
      contextValues.setTilesFlipped(prev => ({ ...prev, first: flippedNumber }))
    } else if (contextValues.flippedCounter % 2 === 1) {
      contextValues.setTilesFlipped(prev => ({ ...prev, second: flippedNumber }))
    }
  }

  return (
    <div className='tile' onClick={handleClick}>{tileValue}</div>
  )
}

export function Memory() {
  const [flippedNumber, setFlippedNumber] = useState([1, 2, 3, 4, 5, 6])
  const contextValues = useContext(MemoryContext)

  /*
    Handles game logic here    
  */
  useEffect(() => {
    console.log(contextValues.flippedCounter)
    console.log(contextValues.tilesFlipped)

    /*
      Check if flippedCounter mod 2 equals to 0,

      Compare tiles:
        if equal, then keep flipped
        else, flip back and reduce counter 
    */
    if (contextValues.flippedCounter % 2 === 0 && contextValues.flippedCounter > 0) {
      if (contextValues.tilesFlipped.first !== contextValues.tilesFlipped.second) {
        contextValues.setTilesFlipped({first: null, second: null})
        contextValues.setFlippedCounter(prev => prev - 2)
        // When not matching, flip back in the board state
      } else {
        console.log('You got a match')
        contextValues.setTilesFlipped({first: null, second: null})
        // When the tiles are matched, make sure the tiles cannot be flipped back
      }
    }

    if (contextValues.flippedCounter === contextValues.board.length) {
      console.log('You won')
    }

  }, [contextValues.flippedCounter])

  return (
    <div className='grid-container'>
      <Tile id={0} flippedNumber={1} />
      <Tile id={1} flippedNumber={1} />
      <Tile id={2} flippedNumber={2} />

      <Tile id={3} flippedNumber={2} />
      <Tile id={4} flippedNumber={3} />
      <Tile id={5} flippedNumber={3} />

      <Tile id={6} flippedNumber={4} />
      <Tile id={7} flippedNumber={4} />
      <Tile id={8} flippedNumber={5} />

      <Tile id={9} flippedNumber={5} />
      <Tile id={10} flippedNumber={6} />
      <Tile id={11} flippedNumber={6} />
    </div>
  )
}
