import { useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import {
  generateFractalCubeGrid,
  generateFractalCubePositions,
  generateFractalLatinSquare,
  populateCubeGrid,
  shouldFill,
} from "../utils";
import Cube from "./Cube";
import { ShapeOption } from "./types";

interface IFractalCube {
  shape: ShapeOption;
  initialScale: number;
  size: number;
  iterations: number;
  color: string;
  opacity: number;
  showText: boolean;
}

const FractalCube = ({
  shape,
  initialScale,
  size,
  iterations,
  color,
  opacity,
  showText,
}: IFractalCube) => {
  const [cubePositions, setCubePositions] = useState<THREE.Vector3[]>([]);
  const [rotate, setRotate] = useState(true);
  const [hovered, setHovered] = useState(false);

  useCursor(hovered, "pointer");
  const speed = hovered ? 0.3 : 0.6;

  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef && groupRef.current && rotate) {
      groupRef.current.rotation.y += speed * delta;
    }
    material.opacity = opacity;
  });

  useEffect(() => {
    const grid = generateFractalCubeGrid(size, iterations);
    const lsquare = generateFractalLatinSquare(size, iterations);
    populateCubeGrid(grid, lsquare);

    const positions = generateFractalCubePositions(size, iterations);
    const shownPositions = positions.filter((pos) => shouldFill(pos, grid));
    setCubePositions(shownPositions);
  }, [iterations, size]);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: color,
        flatShading: true,
        opacity: 0.4,
        transparent: true,
      }),
    [color]
  );

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={() => setRotate((prev) => !prev)}
    >
      {cubePositions.map((pos, idx) => (
        <Cube
          key={idx}
          pos={pos}
          initialScale={initialScale}
          size={size}
          iterations={iterations}
          material={material}
          showText={showText}
        />
      ))}
    </group>
  );
};

export default FractalCube;
