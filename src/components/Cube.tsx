import { Box } from "@react-three/drei";
import { useMemo, useState } from "react";
import * as THREE from "three";
import {
  generateCubeGrid,
  generateCubePositions,
  shouldFill,
} from "../utils/CubeGrid";
import { generateLatinSquare, populateCubeGrid } from "../utils/LatinSquare";

interface ICube {
  size: number;
}

const Cube = ({ size }: ICube) => {
  const [showCube, setShowCube] = useState(true);

  const grid = generateCubeGrid(size);
  populateCubeGrid(grid, generateLatinSquare(size));

  const showMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: "red",
        flatShading: true,
      }),
    []
  );
  const hideMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        opacity: 0,
        transparent: true,
      }),
    []
  );

  return generateCubePositions(size).map((pos) => {
    const { x, y, z } = pos;
    return (
      shouldFill(pos, grid) && (
        <Box
          key={`${x},${y},${z}`}
          args={[0.9, 0.9, 0.9]}
          position={[x, y, z]}
          material={showCube ? showMaterial : hideMaterial}
          onPointerDown={() => setShowCube((prev) => !prev)}
          castShadow
          receiveShadow
        />
      )
    );
  });
};

export default Cube;
