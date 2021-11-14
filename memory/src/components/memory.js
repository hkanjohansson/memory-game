import React, { useState, useEffect, useContext } from 'react'
import './tile.css'

/*
Create global states for tile1_flipped and tile2_flipped

Check id of tile flipped and set flipped
*/
const flippedCount = React.createContext(0)
const flipped = React.createContext(false)

const flippedTiles = React.createContext({ 
  first: null,
  second: null
})

function Image() {
  return (
    <img className='image' src={'./logo192.png'} />
  )
}

function Tile({ id, flippedNumber }) {
  const image = <Image />
  const [tileValue, setTileValue] = useState(image)
  const [flippedTile, setFlipped] = useState(flipped)
  //const [flippedTile] = flipped.Provider
  const [flippedCounter, setFlippedCounter] = useState(useContext(flippedCount))
  
  /*
    useEffect to change the global state

    Dependent on flipped and id of that tile
  */

  const handleClick = () => {
    if (!flippedTile) {
      setTileValue(flippedNumber)
      
      //flippedTile = true
      setFlipped(true)
      setFlippedCounter(prev => prev + 1)

    } else {
      setTileValue(image)
      //flippedTile = false
      setFlipped(false)
    }
  }

  useEffect(() => {
    //setFlippedCounter(prev => prev + 1)
    
    console.log(flippedCounter)
  }, [flippedCounter])

  return (
    <div className='tile' onClick={handleClick}>{tileValue}</div>
  )
}

function Memory({ tile1, tile2 }) {
  const [flippedNumber, setFlippedNumber] = useState([1, 2, 3, 4, 5, 6])
  console.log(`From memory component ${useContext(flippedCount)}`)

  // Define a variable to keep track of number of tiles flipped ----> n === #tiles: Game over
  useEffect(() => {
    console.log(`Does useContext work in Memory?`)
    
  }, [useContext(flippedCount)])

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

export default Memory