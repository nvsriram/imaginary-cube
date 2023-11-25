import { Edges, Tetrahedron as TetrahedronDrei } from "@react-three/drei";

import { IShape } from "@/types";

export const Tetrahedron = ({
  pos,
  initialScale,
  scale,
  material,
  showEdges,
}: IShape) => {
  const { x, y, z } = pos;

  return (
    <TetrahedronDrei
      castShadow
      receiveShadow
      args={[initialScale * scale, 0]}
      material={material}
      position={[x * scale, y * scale, z * scale]}
    >
      <Edges material={material} threshold={15} visible={showEdges} />
    </TetrahedronDrei>
  );
};
