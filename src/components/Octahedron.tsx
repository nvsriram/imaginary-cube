import { Edges, Octahedron as OctahedronDrei } from "@react-three/drei";
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

  const { rotation } = useControls("octahedron", {
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });
  const { x, y, z } = pos;

  return (
    <OctahedronDrei
      args={[initialScale * scale, 0]}
      position={[x * scale, y * scale, z * scale]}
      rotation={[rotation.x, rotation.y, rotation.z]}
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
    </OctahedronDrei>
  );
};

export default Octahedron;
