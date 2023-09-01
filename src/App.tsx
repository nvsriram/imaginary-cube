import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./components/Cube";
import Lights from "./components/Lights";
import Screens from "./components/Screens";

const App = () => {
  return (
    <Canvas camera={{ position: [6, 6, 6] }} shadows>
      <Lights distance={6} />
      <Cube />
      <Screens scale={6} />
      <Stats />
      <OrbitControls target={[0, 0, 0]} />
      <axesHelper args={[3]} />
      <gridHelper />
    </Canvas>
  );
};

export default App;
