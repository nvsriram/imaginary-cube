import { Edges, Tetrahedron as TetrahedronDrei } from "@react-three/drei";
import { IShape } from "../types";

const Tetrahedron = ({
  pos,
  initialScale,
  scale,
  material,
  showEdges,
}: IShape) => {
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
