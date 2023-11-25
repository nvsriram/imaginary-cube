import { Edges } from "@react-three/drei";
import { useControls } from "leva";
import { Mesh } from "three";

import { useObj } from "@/contexts";
import { IShape } from "@/types";

export const Cuboctahedron = ({
  pos,
  initialScale,
  scale,
  material,
  showEdges,
}: IShape) => {
  const { x, y, z } = pos;
  const { rotation } = useControls("cuboctahedron", {
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });

  const { obj, geometry } = useObj();

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = material;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  if (!geometry) return null;

  return (
    <group
      position={[x * scale, y * scale, z * scale]}
      rotation={[rotation.x, rotation.y, rotation.z]}
      scale={[initialScale * scale, initialScale * scale, initialScale * scale]}
    >
      <primitive object={obj} />
      <Edges
        geometry={geometry}
        material={material}
        threshold={15}
        visible={showEdges}
      />
    </group>
  );
};
