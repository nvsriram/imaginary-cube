import { CameraControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { button, useControls } from "leva";
import { RefObject, forwardRef, useRef, useState } from "react";
import { BetaShapeMapKeys, DefaultShapeMapKeys } from "../types";
import { parseShapeKey } from "../utils";
import FractalCube from "./FractalCube";
import Lights from "./Lights";
import Screens from "./Screens";

const FractalCanvas = forwardRef<HTMLElement>((_, parentRef) => {
  const [betaMode, setBetaMode] = useState(false);
  const [shape, setShape] = useState("cube");
  const [reset, setReset] = useState(false);
  const cameraControlRef = useRef<CameraControls>(null);

  const [
    {
      scale,
      dimension,
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
        options: betaMode
          ? [...DefaultShapeMapKeys, ...BetaShapeMapKeys]
          : DefaultShapeMapKeys,
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
        value: 1,
        min: 1,
        max: 10,
        step: 1,
        onEditEnd: (value) => {
          if (cameraControlRef && cameraControlRef.current) {
            cameraControlRef.current.moveTo(0, 0, value * 2, true);
          }
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
        disabled: betaMode && BetaShapeMapKeys.includes(shape),
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
        if (cameraControlRef && cameraControlRef.current) {
          cameraControlRef.current.reset(true);
        }
      }),
    }),
    [betaMode, shape]
  );

  return (
    <div className="w-[300px] h-[300px] my-2">
      <Canvas camera={{ position: [0, 0, dimension * 2] }} shadows>
        <Lights distance={dimension * 2} />
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
        <Screens scale={dimension * 2} />
        {showStats && (
          <Stats
            parent={parentRef as RefObject<HTMLElement>}
            className="!absolute"
          />
        )}
        <CameraControls ref={cameraControlRef} />
        <axesHelper args={[dimension]} visible={showAxes} />
        <gridHelper visible={showGrid} />
      </Canvas>
    </div>
  );
});

export default FractalCanvas;
