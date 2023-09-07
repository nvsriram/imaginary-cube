import { Edges, Tetrahedron as TetrahedronPrimitive } from "@react-three/drei";
import { useMemo } from "react";
import { IShape } from "../types";
import CubeText from "./CubeText";

const Tetrahedron = ({
  pos,
  initialScale,
  size,
  iterations,
  material,
  opacity,
  showText,
  showEdges,
}: IShape) => {
  const scale = useMemo(
    () => size / Math.pow(size, Math.pow(2, iterations)),
    [size, iterations]
  );

  const { x, y, z } = pos;

  return (
    <TetrahedronPrimitive
      args={[initialScale * scale, 0]}
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
          initialScale={initialScale}
          opacity={opacity}
        />
      )}
      <Edges
        scale={scale}
        threshold={15}
        material={material}
        visible={showEdges}
      />
    </TetrahedronPrimitive>
  );
};

export default Tetrahedron;
