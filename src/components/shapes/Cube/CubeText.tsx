import { Text } from "@react-three/drei";
import { Vector3 } from "three";

export interface ICubeText {
  pos: Vector3;
  scale: number;
  size: number;
  opacity: number;
}

export const CubeText = ({ pos, scale, size, opacity }: ICubeText) => {
  const { x, y, z } = pos;
  const half = (size - 1) / 2;

  return (
    <group>
      <Text
        fontSize={0.5 * scale}
        position-z={0.501 * scale}
        fillOpacity={opacity}
      >
        {size - (z + half)}
      </Text>
      <Text
        fontSize={0.5 * scale}
        position-z={-0.501 * scale}
        rotation={[Math.PI, 0, Math.PI]}
        fillOpacity={opacity}
      >
        {z + half + 1}
      </Text>
      <Text
        fontSize={0.5 * scale}
        position-x={0.501 * scale}
        rotation={[0, Math.PI / 2, 0]}
        fillOpacity={opacity}
      >
        {size - (x + half)}
      </Text>
      <Text
        fontSize={0.5 * scale}
        position-x={-0.501 * scale}
        rotation={[0, -Math.PI / 2, 0]}
        fillOpacity={opacity}
      >
        {x + half + 1}
      </Text>
      <Text
        fontSize={0.5 * scale}
        position-y={0.501 * scale}
        rotation={[-Math.PI / 2, 0, 0]}
        fillOpacity={opacity}
      >
        {size - (y + half)}
      </Text>
      <Text
        fontSize={0.5 * scale}
        position-y={-0.501 * scale}
        rotation={[Math.PI / 2, 0, 0]}
        fillOpacity={opacity}
      >
        {y + half + 1}
      </Text>
    </group>
  );
};

export default CubeText;
