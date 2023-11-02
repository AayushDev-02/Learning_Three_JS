/* eslint-disable react/prop-types */

import { useRef } from "react"



const Sphere = ({position, color, size}) => {
  const ref = useRef()
  return (
    <mesh position={position} ref={ref} >    
        <sphereGeometry args={size} />
        
        <meshStandardMaterial color={color}/>
      </mesh>
  )
}

export default Sphere
