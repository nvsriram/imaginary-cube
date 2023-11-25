import { useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

import { FractalShape } from "./FractalShape";

import { usePauseContext } from "@/contexts";
import {
  generateFractalCubeGrid,
  generateFractalCubePositions,
  generateFractalLatinSquare,
  populateCubeGrid,
  shouldFill,
} from "@/utils";

export interface IFractalCube {
  shape: string;
  betaMode: boolean;
  randomize: number;
  initialScale: number;
  size: number;
  iterations: number;
  color: string;
  opacity: number;
  showText: boolean;
  showEdges: boolean;
  reset: boolean;
  setReset: Dispatch<SetStateAction<boolean>>;
}

export const FractalCube = ({
  shape,
  betaMode,
  randomize,
  initialScale,
  size,
  iterations,
  color,
  opacity,
  showText,
  showEdges,
  reset,
  setReset,
}: IFractalCube) => {
  const [cubePositions, setCubePositions] = useState<THREE.Vector3[]>([]);
  const [rotate, setRotate] = useState(true);
  const [hovered, setHovered] = useState(false);

  useCursor(hovered, "pointer");

  // update speed based on reset/hover
  let speed = 0.6;
  if (reset) {
    speed = 6.0;
  } else if (hovered) {
    speed = 0.3;
  }

  // handle material opacity and group rotation
  const groupRef = useRef<THREE.Group>(null);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: color,
        flatShading: true,
        opacity: 0.4,
        transparent: true,
      }),
    [color],
  );
  const { paused } = usePauseContext();
  useFrame((_, delta) => {
    material.opacity = opacity;

    // handle rotation
    if (groupRef && groupRef.current) {
      const rotation = groupRef.current.rotation;
      const angle = speed * delta;
      // reset to original
      if (reset) {
        const nearestReset =
          Math.floor(rotation.y / (2 * Math.PI)) * 2 * Math.PI;
        if (rotation.y <= nearestReset + angle) {
          rotation.y = nearestReset;
          setRotate(false);
          setReset(false);
        } else {
          rotation.y -= angle;
        }
      }
      // rotate
      else if (rotate && !paused) {
        rotation.y += angle;
      }
    }
  });

  // generate cube positions according to latin square
  useEffect(() => {
    const grid = generateFractalCubeGrid(size, iterations);
    const lsquare = generateFractalLatinSquare(size, iterations);
    populateCubeGrid(grid, lsquare);
    const positions = generateFractalCubePositions(size, iterations);
    const shownPositions = positions.filter((pos) => shouldFill(pos, grid));
    setCubePositions(shownPositions);
  }, [iterations, size]);

  // handle scale
  const scale = useMemo(
    () => size / Math.pow(size, Math.pow(2, iterations)),
    [size, iterations],
  );

  return (
    <group
      ref={groupRef}
      onPointerDown={() => setRotate((prev) => !prev)}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {cubePositions.map((pos, idx) => {
        return (
          <FractalShape
            key={idx}
            betaMode={betaMode}
            initialScale={initialScale}
            material={material}
            opacity={opacity}
            pos={pos}
            randomize={randomize}
            scale={scale}
            shape={shape}
            showEdges={showEdges}
            showText={showText}
            size={size}
          />
        );
      })}
    </group>
  );
};
