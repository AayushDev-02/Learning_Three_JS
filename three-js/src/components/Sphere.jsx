/* eslint-disable react/prop-types */

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"



const Sphere = ({position, color, size}) => {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2

  })
  return (
    <mesh position={position} ref={ref} >    
        <sphereGeometry args={size} />
        
        <meshStandardMaterial color={color} wireframe />
      </mesh>
  )
}

export default Sphere
