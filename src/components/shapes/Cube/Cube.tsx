import { Box, Edges } from "@react-three/drei";
import { IShape } from "@/types";
import CubeText from "./CubeText";

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
      args={[initialScale * scale, initialScale * scale, initialScale * scale]}
      position={[x * scale, y * scale, z * scale]}
      material={material}
      castShadow
      receiveShadow
    >
      {showText && (
        <CubeText
          pos={pos}
          scale={scale * initialScale}
          size={size / scale}
          opacity={opacity}
        />
      )}
      <Edges threshold={15} material={material} visible={showEdges} />
    </Box>
  );
};
