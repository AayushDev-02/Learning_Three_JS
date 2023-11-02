/* eslint-disable react/prop-types */

const Cube = ({position, color, size}) => {
  return (
    <mesh position={position} >    
        <boxGeometry args={size} />
        <meshStandardMaterial color={color}/>
      </mesh>
  )
}

export default Cube
