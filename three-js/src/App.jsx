import { Canvas } from "@react-three/fiber"
import "./App.css"
import Cube from "./components/Cube"
import Sphere from "./components/Sphere"
import Torus from "./components/Torus"
import TorusKnot from "./components/TorusKnot"
const App = () => {

  return (

    <Canvas >
      {/* lighting */}
      <directionalLight position={[0, 1, 5]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      {/* this is our box or cube */}

      {/* grouping the cubes */}
      {/* <group position={[0,0,1]}>
        <Cube position={[1, 0, 0]} color={"red"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"blue"} size={[1, 1, 1]} />
        <Cube position={[0, 1, 0]} color={"green"} size={[1, 1, 1]} />
        <Cube position={[0, -1, 0]} color={"yellow"} size={[1, 1, 1]} />
      </group> */}

      {/* <Cube position={[0,0,0]} size={[1,1,1]} color={"orange"}/> */}
      <Sphere position={[0,0,0]} size={[1,30 , 30]} color={"yellow"}/>
      {/* <Torus position={[0,0,0]} size={[1.5, 0.5, 50, 50]} color={"red"}/> */}
      {/* <TorusKnot position={[0,0,0]} size={[1.5, 0.4, 100, 20, 2, 3]} color={"indigo"}/> */}

    </Canvas>

  )
}

export default App
