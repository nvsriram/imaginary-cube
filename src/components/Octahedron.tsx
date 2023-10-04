import { Edges, Octahedron as OctahedronDrei } from "@react-three/drei";
import { useControls } from "leva";
import { IShape } from "../types";

const Octahedron = ({
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
      args={[initialScale * scale, 0]}
      position={[x * scale, y * scale, z * scale]}
      rotation={[rotation.x, rotation.y, rotation.z]}
      material={material}
      castShadow
      receiveShadow
    >
      <Edges threshold={15} material={material} visible={showEdges} />
    </OctahedronDrei>
  );
};

export default Octahedron;
