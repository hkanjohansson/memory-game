import { useState, useEffect } from 'react'
import './tile.css'

/*
Create global states for tile1_flipped and tile2_flipped

Check id of tile flipped and set flipped
*/

function Image() {
  return (
    <img className='image' src={'./logo192.png'} />
  )
}

function Tile({ flippedNumber }) {
  const image = <Image />
  const [tileValue, setTileValue] = useState(image)
  const [flipped, setFlipped] = useState(false)
  
  /*
    useEffect to change the global state

    Dependent on flipped and id of that tile
  */

  const handleClick = () => {
    if (!flipped) {
      setTileValue(flippedNumber)
      setFlipped(true)
    } else {
      setTileValue(image)
      setFlipped(false)
    }
  }

  return (
    <div className='tile' onClick={handleClick}>{tileValue}</div>
  )
}

function Memory({ tile1, tile2 }) {
  const [flippedNumber, setFlippedNumber] = useState([1, 2, 3, 4, 5, 6])
  const [flippedTile1, setFlippedTile1] = useState(false)
  const [flippedTile2, setFlippedTile2] = useState(false)
  // Define a variable to keep track of number of tiles flipped ----> n === #tiles: Game over
  
  useEffect(() => {
    if (flippedTile1 && flippedTile2) {
      // Check if match and handle if flipping back or not
    }

  }, [flippedTile1, flippedTile2])

  return (
    <div className='grid-container'>
      <Tile id={1} flippedNumber={flippedNumber[0]} />
      <Tile id={2} flippedNumber={flippedNumber[0]} />
      <Tile id={3} flippedNumber={flippedNumber[1]} />
      
      <Tile id={4} flippedNumber={flippedNumber[1]} />
      <Tile id={5} flippedNumber={flippedNumber[2]} />
      <Tile id={6} flippedNumber={flippedNumber[2]} />

      <Tile id={7} flippedNumber={flippedNumber[3]} />
      <Tile id={8} flippedNumber={flippedNumber[3]} />
      <Tile id={9} flippedNumber={flippedNumber[4]} />
      
      <Tile id={10} flippedNumber={flippedNumber[4]} />
      <Tile id={11} flippedNumber={flippedNumber[5]} />
      <Tile id={12} flippedNumber={flippedNumber[5]} />
    </div>
  )
}

export default Memory