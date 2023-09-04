import { CameraControls, Loader, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { button, useControls } from "leva";
import { useRef, useState } from "react";
import "./App.css";
import FractalCube from "./components/FractalCube";
import Lights from "./components/Lights";
import Screens from "./components/Screens";
import { ShapeOptions } from "./types";

const App = () => {
  const [reset, setReset] = useState(false);
  const cameraControlRef = useRef<CameraControls>(null);

  const {
    shape,
    scale,
    dimension,
    iterations,
    color,
    opacity,
    showText,
    showAxes,
    showGrid,
    showStats,
  } = useControls("Imaginary Cube Fractal Controls", {
    shape: {
      options: ShapeOptions,
    },
    scale: {
      value: 0.9,
      min: 0.1,
      max: 1,
      step: 0.1,
    },
    dimension: {
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
    opacity: {
      value: 0.4,
      min: 0,
      max: 1,
      step: 0.1,
    },
    showText: {
      label: "show text",
      value: true,
    },
    showAxes: {
      label: "show axes",
      value: false,
    },
    showGrid: {
      label: "show grid",
      value: false,
    },
    showStats: {
      label: "show stats",
      value: true,
    },
    ["reset rotation"]: button(() => {
      setReset(true);
      if (cameraControlRef && cameraControlRef.current) {
        cameraControlRef.current.reset(true);
      }
    }),
  });

  return (
    <>
      <Canvas camera={{ position: [0, 0, dimension * 2] }} shadows>
        <Lights distance={dimension * 2} />
        <FractalCube
          shape={shape}
          initialScale={scale}
          size={dimension}
          iterations={iterations}
          color={color}
          opacity={opacity}
          showText={showText}
          reset={reset}
          setReset={setReset}
        />
        <Screens scale={dimension * 2} />
        {showStats && <Stats />}
        <CameraControls ref={cameraControlRef} />
        <axesHelper args={[dimension]} visible={showAxes} />
        <gridHelper visible={showGrid} />
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
