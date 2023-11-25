import { Edges, Octahedron as OctahedronDrei } from "@react-three/drei";
import { useControls } from "leva";

import { IShape } from "@/types";

export const Octahedron = ({
  pos,
  initialScale,
  scale,
  material,
  showEdges,
}: IShape) => {
  const { x, y, z } = pos;
  const { rotation } = useControls("octahedron", {
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });

  return (
    <OctahedronDrei
      castShadow
      receiveShadow
      args={[initialScale * scale, 0]}
      material={material}
      position={[x * scale, y * scale, z * scale]}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <Edges material={material} threshold={15} visible={showEdges} />
    </OctahedronDrei>
  );
};
