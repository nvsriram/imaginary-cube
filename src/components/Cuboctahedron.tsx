import { Edges } from "@react-three/drei";
import { useControls } from "leva";
import { Mesh } from "three";
import { useObj } from "../contexts/ObjContext";
import { IShape } from "../types";

const Cuboctahedron = ({
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
      scale={[initialScale * scale, initialScale * scale, initialScale * scale]}
      position={[x * scale, y * scale, z * scale]}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <primitive object={obj} />
      <Edges
        threshold={15}
        geometry={geometry}
        material={material}
        visible={showEdges}
      />
    </group>
  );
};

export default Cuboctahedron;
