import { Box } from "@react-three/drei";
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
  size: number;
  fractal: number;
}

const Cube = ({ size, fractal }: ICube) => {
  const [showCube, setShowCube] = useState(true);
  const [cubePositions, setCubePositions] = useState<THREE.Vector3[]>([]);

  useEffect(() => {
    const grid = generateFractalCubeGrid(size, fractal);
    const lsquare = generateFractalLatinSquare(size, fractal);
    populateCubeGrid(grid, lsquare);

    const positions = generateFractalCubePositions(size, fractal);
    const shownPositions = positions.filter((pos) => shouldFill(pos, grid));
    setCubePositions(shownPositions);
  }, [fractal, size]);

  const scale = useMemo(() => 1 / Math.pow(size, fractal), [size, fractal]);
  const showMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "cyan",
        flatShading: true,
      }),
    []
  );
  const hideMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "cyan",
        flatShading: true,
        opacity: 0.4,
        transparent: true,
      }),
    []
  );

  return cubePositions.map((pos) => {
    const { x, y, z } = pos;
    return (
      <Box
        key={`${x},${y},${z}`}
        args={[0.9 * scale, 0.9 * scale, 0.9 * scale]}
        position={[x * scale, y * scale, z * scale]}
        material={showCube ? showMaterial : hideMaterial}
        onPointerDown={() => setShowCube((prev) => !prev)}
        castShadow
        receiveShadow
      >
        <CubeText size={size} fractal={fractal} pos={pos} />
      </Box>
    );
  });
};

export default Cube;
