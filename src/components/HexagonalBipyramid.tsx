import { Cone, Edges } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { IShape } from "../types";

const HexagonalBipyramid = ({
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

  const { rotation } = useControls("hexagonal bipyramid", {
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });
  const { x, y, z } = pos;

  return (
    <group>
      <group
        rotation={[rotation.x, rotation.y, rotation.z]}
        scale={[
          initialScale * scale,
          initialScale * scale,
          initialScale * scale,
        ]}
      >
        <Cone
          args={[1, 1, 6, 1, true]}
          material={material}
          position={[x, y + 0.5, z]}
          rotation-x={0}
          castShadow
          receiveShadow
        >
          <Edges
            scale={scale}
            threshold={15}
            material={material}
            visible={showEdges}
          />
        </Cone>
        <Cone
          args={[1, 1, 6, 1, true]}
          material={material}
          position={[x, y - 0.5, z]}
          rotation-z={Math.PI}
          castShadow
          receiveShadow
        >
          <Edges
            scale={scale}
            threshold={15}
            material={material}
            visible={showEdges}
          />
        </Cone>
      </group>
    </group>
  );
};

export default HexagonalBipyramid;
