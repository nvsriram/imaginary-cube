import { Edges } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useMemo, useState } from "react";
import { BufferGeometry, Group, Mesh } from "three";
import { OBJLoader } from "three-stdlib";
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

  const obj: Group = useLoader(OBJLoader, "cuboctahedron.obj");
  const [geometry, setGeometry] = useState<BufferGeometry>();

  useMemo(
    () =>
      obj.traverse((child) => {
        if (child instanceof Mesh) {
          child.material = material;
          setGeometry(child.geometry);
          child.castShadow = true;
          child.receiveShadow = true;
          child.position.set(x * scale, y * scale, z * scale);
          child.scale.set(
            initialScale * scale,
            initialScale * scale,
            initialScale * scale,
          );
          child.rotation.x = rotation.x;
          child.rotation.y = rotation.y;
          child.rotation.z = rotation.z;
        }
      }),
    [
      initialScale,
      material,
      obj,
      rotation.x,
      rotation.y,
      rotation.z,
      scale,
      x,
      y,
      z,
    ],
  );

  if (!geometry) return null;

  return (
    <Suspense fallback={null}>
      <primitive object={obj} />
      <Edges
        scale={scale}
        threshold={15}
        geometry={geometry}
        material={material}
        visible={showEdges}
      />
    </Suspense>
  );
};

export default Cuboctahedron;
