import React, { useState, useEffect, useContext } from 'react'
import './tile.css'
import { MemoryContext } from '../index'

function Image() {
  return (
    <img className='image' src={'./logo192.png'} />
  )
}

export function Tile({ id, flippedNumber, flipable }) {
  // Should these two be put in a context???
  const image = <Image />
  const [tileValue, setTileValue] = useState(image)
  /////////////////////////////////////////////////////
  // Should everything concerning flip events be put in the Memory component? And tile is just the object?
  const contextValues = useContext(MemoryContext)
  let tempBoard = [...contextValues.board]
  
  const handleClick = () => {
    if (!tempBoard[id] && flipable) {
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
    <button className='tile' onClick={handleClick}>{tileValue}</button>
  )
}

export function Memory() {
  const [flippedNumber, setFlippedNumber] = useState([1, 2, 3, 4, 5, 6])
  const contextValues = useContext(MemoryContext)

  const flipable = [...contextValues.flipable]
  console.log(`Flipable: ${flipable}`)
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
        contextValues.setTilesFlipped({ first: null, second: null })
        contextValues.setFlippedCounter(prev => prev - 2)

        // When not matching, flip back in the board state
        // Set a timer that after ~1s flip back the tiles

      } else {
        // How to get the id of the tiles flipped from here? Does the context need to be changed?
        console.log('You got a match')
        contextValues.setTilesFlipped({ first: null, second: null })
        contextValues.setFlipable(prev => [...prev, ])
        // When the tiles are matched, make sure the tiles cannot be flipped back
        // 
      }
    }

    if (contextValues.flippedCounter === contextValues.board.length) {
      console.log('You won')
    }

  }, [contextValues.flippedCounter])

  return (
    <div className='grid-container'>
      <Tile id={0} flippedNumber={flippedNumber[0]} flipable={flipable[0]} />
      <Tile id={1} flippedNumber={flippedNumber[0]} flipable={flipable[1]} />
      <Tile id={2} flippedNumber={flippedNumber[1]} flipable={flipable[2]} />

      <Tile id={3} flippedNumber={flippedNumber[1]} flipable={flipable[3]} />
      <Tile id={4} flippedNumber={flippedNumber[2]} flipable={flipable[4]} />
      <Tile id={5} flippedNumber={flippedNumber[2]} flipable={flipable[5]} />

      <Tile id={6} flippedNumber={flippedNumber[3]} flipable={flipable[6]} />
      <Tile id={7} flippedNumber={flippedNumber[3]} flipable={flipable[7]} />
      <Tile id={8} flippedNumber={flippedNumber[4]} flipable={flipable[8]} />

      <Tile id={9} flippedNumber={flippedNumber[4]} flipable={flipable[9]} />
      <Tile id={10} flippedNumber={flippedNumber[5]} flipable={flipable[10]} />
      <Tile id={11} flippedNumber={flippedNumber[5]} flipable={flipable[11]} />
    </div>
  )
}
