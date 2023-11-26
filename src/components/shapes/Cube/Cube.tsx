import { Box, Edges } from "@react-three/drei";

import { CubeText } from "./CubeText";

import { IShape } from "@/types";

export const Cube = ({
  pos,
  initialScale,
  scale,
  size,
  material,
  opacity,
  showText,
  showEdges,
}: IShape) => {
  const { x, y, z } = pos;

  return (
    <Box
      castShadow
      receiveShadow
      args={[initialScale * scale, initialScale * scale, initialScale * scale]}
      material={material}
      position={[x * scale, y * scale, z * scale]}
    >
      {showText && (
        <CubeText
          opacity={opacity}
          pos={pos}
          scale={scale * initialScale}
          size={size / scale}
        />
      )}
      <Edges material={material} threshold={15} visible={showEdges} />
    </Box>
  );
};
