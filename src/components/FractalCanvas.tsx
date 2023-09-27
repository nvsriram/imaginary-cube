import { CameraControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { button, useControls } from "leva";
import { RefObject, useCallback, useRef, useState } from "react";
import { AllShapeMapKeys, DefaultShapeMapKeys } from "../types";
import { parseShapeKey } from "../utils";
import FractalCube from "./FractalCube";
import Lights from "./Lights";
import Screens from "./Screens";

const FractalCanvas = () => {
  const [dimension, setDimension] = useState(1);
  const [betaMode, setBetaMode] = useState(false);
  const [shape, setShape] = useState("cube");
  const [reset, setReset] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);
  const cameraControlRef = useRef<CameraControls>(null);

  const ZOOM_FACTOR = 3;

  const handleCameraReset = useCallback(
    (value: number) => {
      if (cameraControlRef && cameraControlRef.current) {
        cameraControlRef.current.setPosition(0, 0, value * ZOOM_FACTOR, true);
        cameraControlRef.current.setTarget(0, 0, 0, true);
      }
    },
    [cameraControlRef],
  );

  const [
    {
      scale,
      iterations,
      color,
      opacity,
      showText,
      showEdges,
      showAxes,
      showGrid,
      showStats,
    },
  ] = useControls(
    "imaginary cube fractal controls",
    () => ({
      shape: {
        options: betaMode ? AllShapeMapKeys : DefaultShapeMapKeys,
        value: shape,
        onChange: (value) => setShape(value),
      },
      scale: {
        value: 1.0,
        min: 0.1,
        max: 1,
        step: 0.1,
      },
      dimension: {
        value: dimension,
        min: 1,
        max: 10,
        step: 1,
        onChange: (value) => {
          handleCameraReset(value);
          setDimension(value);
        },
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
        value: 0.7,
        min: 0,
        max: 1,
        step: 0.1,
      },
      showText: {
        label: (
          <span title="shows axis elevation based on latin square">
            show text
          </span>
        ),
        value: true,
        disabled: shape != "cube",
      },
      showEdges: {
        label: (
          <span title="displays edge lines on top of shape">show edges</span>
        ),
        value: true,
      },
      showAxes: {
        label: <span title="shows xyz axes">show axes</span>,
        value: false,
      },
      showGrid: {
        label: <span title="shows xy plane grid">show grid</span>,
        value: false,
      },
      showStats: {
        label: <span title="shows stats on top left">show stats</span>,
        value: true,
      },
      betaMode: {
        label: (
          <span title="shows experimental shapes">
            [β] mode <sup>*</sup>
          </span>
        ),
        value: betaMode,
        onChange: (value) => setBetaMode(value),
      },
      ["reset scene"]: button(() => {
        setReset(true);
        handleCameraReset(dimension);
      }),
    }),
    [betaMode, dimension, shape],
  );

  return (
    <div
      className="relative h-full w-full grow rounded-lg bg-elevation1 shadow-level1"
      ref={divRef}
    >
      <Canvas
        camera={{ position: [0, 0, dimension * ZOOM_FACTOR] }}
        shadows
        className="!absolute"
      >
        <FractalCube
          shape={parseShapeKey(shape)}
          initialScale={scale}
          size={dimension}
          iterations={iterations}
          color={color}
          opacity={opacity}
          showText={showText}
          showEdges={showEdges}
          reset={reset}
          setReset={setReset}
        />
        <Lights distance={dimension * ZOOM_FACTOR} />
        <Screens scale={dimension * 2} />
        {showStats && (
          <Stats
            parent={divRef as RefObject<HTMLDivElement>}
            className="!absolute"
          />
        )}
        <CameraControls ref={cameraControlRef} />
        <axesHelper args={[dimension]} visible={showAxes} />
        <gridHelper visible={showGrid} />
      </Canvas>
    </div>
  );
};

export default FractalCanvas;
