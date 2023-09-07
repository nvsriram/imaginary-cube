import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useMemo } from "react";
import { Group, Mesh } from "three";
import { OBJLoader } from "three-stdlib";
import { IShape } from "../types";

const Cuboctahedron = ({
  pos,
  initialScale,
  size,
  iterations,
  material,
}: IShape) => {
  const scale = useMemo(
    () => size / Math.pow(size, Math.pow(2, iterations)),
    [size, iterations]
  );

  const { x, y, z } = pos;

  const { rotation } = useControls("Cuboctahedron", {
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });

  const obj: Group = useLoader(OBJLoader, "cuboctahedron.obj");

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = material;
      child.castShadow = true;
      child.receiveShadow = true;
      child.position.set(x * scale, y * scale, z * scale);
      child.scale.set(
        initialScale * scale,
        initialScale * scale,
        initialScale * scale
      );
      child.rotation.x = rotation.x;
      child.rotation.y = rotation.y;
      child.rotation.z = rotation.z;
    }
  });

  return (
    <Suspense fallback={null}>
      <primitive object={obj} />
    </Suspense>
  );
};

export default Cuboctahedron;
