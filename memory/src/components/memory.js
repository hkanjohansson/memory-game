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
  const [flipped, setFlipped] = useState(false)
  const contextValues = useContext(MemoryContext)

  const handleClick = () => {
    let tempBoard = [...contextValues.board]
    console.log(tempBoard)
    if (!flipped) { // TODO : Change to board[id]
      tempBoard[id] = true
      setTileValue(flippedNumber)
      setFlipped(true)
      contextValues.setFlippedCounter(prev => prev + 1)
      contextValues.setBoard([...tempBoard])
    } else {
      setTileValue(image)
      setFlipped(false)
      contextValues.setFlippedCounter(prev => prev - 1)
    }

    if (contextValues.flippedCounter % 2 === 0) {
      contextValues.setTilesFlipped(prev => ({ ...prev, first: id }))
    } else if (contextValues.flippedCounter % 2 === 1) {
      contextValues.setTilesFlipped(prev => ({ ...prev, second: id }))
    }
  }

  console.log(`Hej hej: ${contextValues.board}`)
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

  }, [contextValues.flippedCounter])

  return (
    <div className='grid-container'>
      <Tile id={0} flippedNumber={flippedNumber[0]} />
      <Tile id={1} flippedNumber={flippedNumber[0]} />
      <Tile id={2} flippedNumber={flippedNumber[1]} />

      <Tile id={3} flippedNumber={flippedNumber[1]} />
      <Tile id={4} flippedNumber={flippedNumber[2]} />
      <Tile id={5} flippedNumber={flippedNumber[2]} />

      <Tile id={6} flippedNumber={flippedNumber[3]} />
      <Tile id={7} flippedNumber={flippedNumber[3]} />
      <Tile id={8} flippedNumber={flippedNumber[4]} />

      <Tile id={9} flippedNumber={flippedNumber[4]} />
      <Tile id={10} flippedNumber={flippedNumber[5]} />
      <Tile id={11} flippedNumber={flippedNumber[5]} />
    </div>
  )
}
