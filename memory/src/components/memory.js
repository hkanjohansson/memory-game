import Tile from './tile'
import { useState, useEffect } from 'react'

/*
  Should game logic handle the grid and then be imported to Memory? 
*/
function GameLogic({ flippedNumber }) {
  const [countFlipped, setCountFlipped] = useState(0)

  console.log(`gameLogic ${flippedNumber}`)
  useEffect(() => {

  }, [flippedNumber])

  return (
    true
  )
}

function Memory() {
  const [flippedNumber, setFlippedNumber] = useState([1, 2, 3, 4, 5, 6])
  
  return (
    <div className='grid-container'>
      <GameLogic flippedNumber={flippedNumber} />
      <Tile flippedNumber={flippedNumber[0]} />
      <Tile flippedNumber={flippedNumber[0]} />
      <Tile flippedNumber={flippedNumber[1]} />
      <Tile flippedNumber={flippedNumber[1]} />
      <Tile flippedNumber={flippedNumber[2]} />
      <Tile flippedNumber={flippedNumber[2]} />

      <Tile flippedNumber={flippedNumber[3]} />
      <Tile flippedNumber={flippedNumber[3]} />
      <Tile flippedNumber={flippedNumber[4]} />
      <Tile flippedNumber={flippedNumber[4]} />
      <Tile flippedNumber={flippedNumber[5]} />
      <Tile flippedNumber={flippedNumber[5]} />
    </div>
  )
}

export default Memory