import { Box } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import CubeText from "./CubeText";

interface ICube {
  pos: THREE.Vector3;
  initialScale: number;
  size: number;
  iterations: number;
  material: THREE.Material;
  showText: boolean;
}

const Cube = ({
  pos,
  initialScale,
  size,
  iterations,
  material,
  showText,
}: ICube) => {
  const scale = useMemo(
    () => size / Math.pow(size, Math.pow(2, iterations)),
    [size, iterations]
  );

  const { x, y, z } = pos;

  return (
    <Box
      args={[initialScale * scale, initialScale * scale, initialScale * scale]}
      position={[x * scale, y * scale, z * scale]}
      material={material}
      castShadow
      receiveShadow
    >
      {showText && <CubeText size={size} fractal={iterations} pos={pos} />}
    </Box>
  );
};

export default Cube;
