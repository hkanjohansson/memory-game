import Tile from './tile'

function Memory() {
    
  return (
    <div className='grid-container'>
      <Tile flippedNumber={1} />
      <Tile flippedNumber={1} />
      <Tile flippedNumber={2} />
      <Tile flippedNumber={2} />
      <Tile flippedNumber={3} />
      <Tile flippedNumber={3} />
      
      <Tile flippedNumber={4} />
      <Tile flippedNumber={4} />
      <Tile flippedNumber={5} />
      <Tile flippedNumber={5} />
      <Tile flippedNumber={6} />
      <Tile flippedNumber={6} />
    </div>
  )
}

export default Memory