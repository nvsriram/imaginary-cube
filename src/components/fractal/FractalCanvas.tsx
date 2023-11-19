import { CameraControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { button, useControls } from "leva";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AllShapeMapKeys, DefaultShapeMapKeys } from "@/types";
import { deserializeControls, serializeControls } from "@/utils";
import { FractalCube } from "./FractalCube";
import Lights from "../Lights";
import Screens from "../Screens";

export const FractalCanvas = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = deserializeControls(searchParams);

  const [dimension, setDimension] = useState((initial.size ?? 1) as number);
  const [betaMode, setBetaMode] = useState(
    (initial.betaMode ?? false) as boolean,
  );
  const [shape, setShape] = useState((initial.shape ?? "cube") as string);
  const [reset, setReset] = useState(false);
  const [randomize, setRandomize] = useState(0);

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

  const [controls] = useControls(
    "imaginary cube fractal controls",
    () => ({
      shape: {
        label: <span title="controls base shape">shape</span>,
        options: betaMode ? AllShapeMapKeys : DefaultShapeMapKeys,
        value: shape,
        onChange: (value) => {
          setShape(value);
          setRandomize(0);
        },
      },
      "randomize shapes": button(() => {
        setRandomize((prev) => prev + 1);
      }),
      scale: {
        label: <span title="controls shape scale">scale</span>,
        value: (initial.scale ?? 1.0) as number,
        min: 0.1,
        max: 1,
        step: 0.1,
      },
      dimension: {
        label: (
          <span title="controls dimension of underlying latin square">
            dimension
          </span>
        ),
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
        label: (
          <span title="controls number of fractal iterations">iterations</span>
        ),
        value: (initial.size ?? 0) as number,
        min: 0,
        max: 3,
        step: 1,
      },
      color: {
        label: <span title="controls shape color">color</span>,
        value: (initial.color ?? "cyan") as string,
      },
      opacity: {
        label: <span title="controls shape opacity">opacity</span>,
        value: (initial.opacity ?? 0.7) as number,
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
        value: (initial.showText ?? true) as boolean,
        disabled: shape != "cube",
      },
      showEdges: {
        label: (
          <span title="displays edge lines on top of shape">show edges</span>
        ),
        value: (initial.showEdges ?? true) as boolean,
      },
      showAxes: {
        label: <span title="shows xyz axes">show axes</span>,
        value: (initial.showAxes ?? false) as boolean,
      },
      showGrid: {
        label: <span title="shows xy plane grid">show grid</span>,
        value: (initial.showGrid ?? false) as boolean,
      },
      showStats: {
        label: <span title="shows stats on top left">show stats</span>,
        value: (initial.showStats ?? true) as boolean,
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
      "reset scene": button(() => {
        setReset(true);
        handleCameraReset(dimension);
      }),
    }),
    [betaMode, dimension, shape],
  );
  const {
    scale,
    iterations,
    color,
    opacity,
    showText,
    showEdges,
    showAxes,
    showGrid,
    showStats,
  } = controls;

  useEffect(() => {
    const allControls = { shape, size: dimension, betaMode, ...controls };
    const searchParams = new URLSearchParams(serializeControls(allControls));
    setSearchParams(searchParams);
  }, [controls, betaMode, dimension, shape, setSearchParams]);

  return (
    <div
      className="relative h-52 max-h-[208px] w-full grow rounded-lg bg-elevation1 shadow-level1 md:h-80 md:max-h-[288px] xl:h-96 xl:max-h-[384px]"
      ref={divRef}
    >
      <Canvas camera={{ position: [0, 0, dimension * ZOOM_FACTOR] }} shadows>
        <FractalCube
          shape={shape}
          betaMode={betaMode}
          randomize={randomize}
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
        {showStats && divRef && (
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
