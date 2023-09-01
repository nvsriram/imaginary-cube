import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./components/Cube";
import Lights from "./components/Lights";
import Screens from "./components/Screens";

const App = () => {
  const scale = 5;
  return (
    <Canvas camera={{ position: [scale * 2, scale * 2, scale * 2] }} shadows>
      <Lights distance={scale * 2} />
      <Cube size={scale} />
      <Screens scale={scale * 2} />
      <Stats />
      <OrbitControls target={[0, 0, 0]} />
      <axesHelper args={[scale]} />
    </Canvas>
  );
};

export default App;
