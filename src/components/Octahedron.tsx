import { Edges, Octahedron as OctahedronPrimitive } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { IShape } from "../types";

const Octahedron = ({
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

  const { rotation } = useControls("Octahedron", {
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });
  const { x, y, z } = pos;

  return (
    <OctahedronPrimitive
      args={[initialScale * scale, 0]}
      position={[x * scale, y * scale, z * scale]}
      rotation={[rotation.x, rotation.y, rotation.z]}
      material={material}
      castShadow
      receiveShadow
    >
      <Edges
        scale={scale}
        threshold={15}
        material={material}
        visible={showEdges}
      />
    </OctahedronPrimitive>
  );
};

export default Octahedron;
