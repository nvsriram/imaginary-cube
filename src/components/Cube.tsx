import { Box, useCursor } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { shouldFill } from "../utils/CubeGrid";
import {
  generateFractalCubeGrid,
  generateFractalCubePositions,
  generateFractalLatinSquare,
} from "../utils/Fractal";
import { populateCubeGrid } from "../utils/LatinSquare";
import CubeText from "./CubeText";

interface ICube {
  initialScale: number;
  size: number;
  iterations: number;
  color: string;
  showText: boolean;
}

const Cube = ({ initialScale, size, iterations, color, showText }: ICube) => {
  const [hovered, setHovered] = useState(false);
  const [showCube, setShowCube] = useState(true);
  const [cubePositions, setCubePositions] = useState<THREE.Vector3[]>([]);

  useCursor(hovered, "pointer");

  useEffect(() => {
    const grid = generateFractalCubeGrid(size, iterations);
    const lsquare = generateFractalLatinSquare(size, iterations);
    populateCubeGrid(grid, lsquare);

    const positions = generateFractalCubePositions(size, iterations);
    const shownPositions = positions.filter((pos) => shouldFill(pos, grid));
    setCubePositions(shownPositions);
  }, [iterations, size]);

  const scale = useMemo(
    () => size / Math.pow(size, Math.pow(2, iterations)),
    [size, iterations]
  );

  const showMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: color,
        flatShading: true,
      }),
    [color]
  );
  const hideMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: color,
        flatShading: true,
        opacity: 0.4,
        transparent: true,
      }),
    [color]
  );

  return cubePositions.map((pos) => {
    const { x, y, z } = pos;
    return (
      <Box
        key={`${x},${y},${z}`}
        args={[
          initialScale * scale,
          initialScale * scale,
          initialScale * scale,
        ]}
        position={[x * scale, y * scale, z * scale]}
        material={showCube ? showMaterial : hideMaterial}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onPointerDown={() => setShowCube((prev) => !prev)}
        castShadow
        receiveShadow
      >
        {showText && <CubeText size={size} fractal={iterations} pos={pos} />}
      </Box>
    );
  });
};

export default Cube;
