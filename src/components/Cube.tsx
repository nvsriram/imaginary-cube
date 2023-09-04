import { Box } from "@react-three/drei";
import { useMemo } from "react";
import { IShape } from "../types";
import CubeText from "./CubeText";

const Cube = ({
  pos,
  initialScale,
  size,
  iterations,
  material,
  showText,
  opacity,
}: IShape) => {
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
      {showText && (
        <CubeText
          size={size}
          fractal={iterations}
          pos={pos}
          opacity={opacity}
        />
      )}
    </Box>
  );
};

export default Cube;
