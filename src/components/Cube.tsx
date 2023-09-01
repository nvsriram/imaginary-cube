import { Box } from "@react-three/drei";
import { useMemo, useState } from "react";
import * as THREE from "three";
import { generateCubeGrid } from "../utils/CubeGrid";

const Cube = () => {
  const [showCube, setShowCube] = useState(true);

  const grid = generateCubeGrid(3);

  for (let x = 0; x < 3; ++x) {
    grid[x][0][0] = false;
  }

  const showMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: "yellow",
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

  const positionX = [-1, 0, 1];
  const positionY = [-1, 0, 1];
  const positionZ = [-1, 0, 1];

  return positionX.map((x) =>
    positionY.map((y) =>
      positionZ.map((z) => {
        return (
          grid[x + 1][y + 1][z + 1] && (
            <Box
              key={`${x},${y},${z}`}
              args={[0.7, 0.7, 0.7]}
              position={[x, y, z]}
              material={showCube ? showMaterial : hideMaterial}
              onPointerDown={() => setShowCube((prev) => !prev)}
              castShadow
              receiveShadow
            />
          )
        );
      })
    )
  );
};

export default Cube;
