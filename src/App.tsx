import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./components/Cube";
import Lights from "./components/Lights";
import Screens from "./components/Screens";
import { useControls } from "leva";

const App = () => {
  const controls = useControls({
    size: {
      value: 2,
      min: 1,
      max: 10,
      step: 1,
    },
    fractal: {
      value: 0,
      min: 0,
      max: 3,
      step: 1,
    },
  });
  return (
    <>
      <Canvas camera={{ position: [0, 0, controls.size * 2] }} shadows>
        <Lights distance={controls.size * 2} />
        <Cube size={controls.size} fractal={controls.fractal} />
        <Screens scale={controls.size * 2} />
        <Stats />
        <OrbitControls target={[0, 0, 0]} />
        <axesHelper args={[controls.size]} />
      </Canvas>
      <div></div>
    </>
  );
};

export default App;
