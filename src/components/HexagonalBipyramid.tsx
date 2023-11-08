import { Cone, Edges } from "@react-three/drei";
import { useControls } from "leva";
import { IShape } from "../types";

const HexagonalBipyramid = ({
  pos,
  initialScale,
  scale,
  material,
  showEdges,
}: IShape) => {
  const { x, y, z } = pos;
  const { rotation } = useControls("hexagonal bipyramid", {
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });

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
          <Edges threshold={15} material={material} visible={showEdges} />
        </Cone>
        <Cone
          args={[1, 1, 6, 1, true]}
          material={material}
          position={[x, y - 0.5, z]}
          rotation-z={Math.PI}
          castShadow
          receiveShadow
        >
          <Edges threshold={15} material={material} visible={showEdges} />
        </Cone>
      </group>
    </group>
  );
};

export default HexagonalBipyramid;
