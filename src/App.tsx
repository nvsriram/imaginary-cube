import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import "./App.css";
import Cube from "./components/Cube";
import Lights from "./components/Lights";
import Screens from "./components/Screens";

const App = () => {
  const controls = useControls("Fractal Cube", {
    scale: {
      value: 0.9,
      min: 0.1,
      max: 1,
      step: 0.1,
    },
    n: {
      value: 2,
      min: 1,
      max: 10,
      step: 1,
    },
    iterations: {
      value: 0,
      min: 0,
      max: 3,
      step: 1,
    },
    color: {
      value: "cyan",
    },
    showText: {
      value: true,
    },
    showAxes: {
      value: false,
    },
    showGrid: {
      value: false,
    },
    showStats: {
      value: true,
    },
  });
  return (
    <>
      <Canvas camera={{ position: [0, 0, controls.n * 2] }} shadows>
        <Lights distance={controls.n * 2} />
        <Cube
          initialScale={controls.scale}
          size={controls.n}
          iterations={controls.iterations}
          color={controls.color}
          showText={controls.showText}
        />
        <Screens scale={controls.n * 2} />
        {controls.showStats && <Stats />}
        <OrbitControls target={[0, 0, 0]} />
        <axesHelper args={[controls.n]} visible={controls.showAxes} />
        <gridHelper visible={controls.showGrid} />
      </Canvas>
    </>
  );
};

export default App;
