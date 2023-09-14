import { Edges, Tetrahedron as TetrahedronDrei } from "@react-three/drei";
import { useMemo } from "react";
import { IShape } from "../types";

const Tetrahedron = ({
  pos,
  initialScale,
  size,
  iterations,
  material,
  showEdges,
}: IShape) => {
  const scale = useMemo(
    () => size / Math.pow(size, Math.pow(2, iterations)),
    [size, iterations]
  );

  const { x, y, z } = pos;

  return (
    <TetrahedronDrei
      args={[initialScale * scale, 0]}
      position={[x * scale, y * scale, z * scale]}
      material={material}
      castShadow
      receiveShadow
    >
      <Edges
        scale={initialScale}
        threshold={15}
        material={material}
        visible={showEdges}
      />
    </TetrahedronDrei>
  );
};

export default Tetrahedron;
