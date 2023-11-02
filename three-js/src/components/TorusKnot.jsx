/* eslint-disable react/prop-types */

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const TorusKnot = ({ position, color, size }) => {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta
        ref.current.rotation.z += delta
    })
    return (
        <mesh position={position} ref={ref} >
            <torusKnotGeometry args={size} />

            <meshStandardMaterial color={color} />
        </mesh>
    )
}

export default TorusKnot