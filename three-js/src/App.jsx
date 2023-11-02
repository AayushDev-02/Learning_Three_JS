import { Canvas } from "@react-three/fiber"
import "./App.css"
import Cube from "./components/Cube"
const App = () => {

  return (

    <Canvas >
      {/* lighting */}
      <directionalLight position={[0, 1, 3]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      {/* this is our box or cube */}

      {/* grouping the cubes */}
      <group position={[0,0,1]}>
        <Cube position={[1, 0, 0]} color={"red"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"blue"} size={[1, 1, 1]} />
        <Cube position={[0, 1, 0]} color={"green"} size={[1, 1, 1]} />
        <Cube position={[0, -1, 0]} color={"yellow"} size={[1, 1, 1]} />
      </group>

    </Canvas>

  )
}

export default App
