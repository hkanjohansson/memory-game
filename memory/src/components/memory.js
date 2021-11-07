import Tile from './tile'
import { useState, useEffect } from 'react'

/*
  *Jag vill på något sätt jämföra två brickor om de två är lika.
    -

*/
function GameLogic({ flippedNumber, tile_1, tile_2 }) {
  const [countFlipped, setCountFlipped] = useState(0)
  let tiles_equal = false

  console.log(`gameLogic ${flippedNumber}`)
  useEffect(() => {
    console.log('Hej')
    tiles_equal = tile_1 === tile_2
  }, [flippedNumber])

  return (
    true
  )
}

function Memory() {
  const [flippedNumber, setFlippedNumber] = useState([1, 2, 3, 4, 5, 6])

  /*
    Här vill jag lyssna på flip events och definiera vilken som är tile_1 och tile_2
    för att sedan skicka som props till GameLogic?

    Skulle useEffect kunna användas här?
  */
  return (
    <div className='grid-container'>
      <GameLogic flippedNumber={flippedNumber} tile_1={tile_1} tile_2={tile_2} /> 
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