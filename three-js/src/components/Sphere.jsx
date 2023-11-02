/* eslint-disable react/prop-types */

import { events, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"



const Sphere = ({ position, color, size }) => {
  const ref = useRef()

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    // ref.current.rotation.x += delta
    
    ref.current.rotation.x += delta
    if(isHovered){
      ref.current.rotation.y += delta 
      ref.current.rotation.x += delta
    }




    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2

  })
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "red" : color} wireframe />
    </mesh>
  )
}

export default Sphere
