import { React, useState, useEffect } from 'react'
import './tile.css'

function Image() {
  return (
    <img className='image' src={'./logo192.png'} />
  )
}

function Tile({flippedNumber }) {
  const image = <Image />
  const [tileValue, setTileValue] = useState(image)
  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    if (flipped === false) {
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

export default Tile