import React, { useState, useEffect, useContext } from 'react'
import './tile.css'
import { MemoryContext } from '../index'

/*
Create global states for tile1_flipped and tile2_flipped

Check id of tile flipped and set flipped
*/


function Image() {
  return (
    <img className='image' src={'./logo192.png'} />
  )
}

function Tile({ id, flippedNumber }) {
  const image = <Image />
  const [tileValue, setTileValue] = useState(image)
  const [flipped, setFlipped] = useState(false)

  /*
    #######
    Ska jag konsumera context här? Och sen i Memory?
    #######
  */
  const [memoryState, setMemoryState] = useState(useContext(MemoryContext))

  const handleClick = () => {
    if (!flipped) {
      setTileValue(flippedNumber)
      setFlipped(true)
      /*
      ##############
        Denna sätter jag för att se om jag får en reaktion i useEffect i Memory-komponenten, men 
        det funkar inte än.
      ##############
      */
      setMemoryState({
        flippedCount: 1, // ##### Här vill jag öka flippedCount och sen kolla i Memory om det är lika med antalet brickor, jämföra om två nya är flippade etc. 
        flippedTiles: { first: id, second: null }}) 
    } else {
      setTileValue(image)
      setFlipped(false)
      setMemoryState({
        flippedCount: 1,
        flippedTiles: { first: null, second: null }}) 
    }
  }

  //console.log(memoryState)

  return (
    <div className='tile' onClick={handleClick}>{tileValue}</div>
  )
}

function Memory() {
  const [flippedNumber, setFlippedNumber] = useState([1, 2, 3, 4, 5, 6])
  const [memoryState, setMemoryState] = useState(useContext(MemoryContext))

  useEffect(() => {
    //setFlippedCount(prev => prev + 1)
    console.log(`Hej hej från useEffect ${memoryState}`)
  }, [memoryState.flippedCount])

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
      <div className={'score-board'}>{memoryState.flippedCount}</div>
    </div>
  )
}

export default Memory