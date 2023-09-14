import { Text } from "@react-three/drei";
import { Vector3 } from "three";

interface ICubeText {
  size: number;
  fractal: number;
  pos: Vector3;
  initialScale: number;
  opacity: number;
}

const CubeText = ({ size, fractal, pos, initialScale, opacity }: ICubeText) => {
  const newSize = Math.pow(size, Math.pow(2, fractal));
  const scale = (size / newSize) * initialScale;
  const half = (newSize - 1) / 2;
  return (
    <group>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-z={0.501 * scale}
        fillOpacity={opacity}
      >
        {newSize - (pos.z + half)}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-z={-0.501 * scale}
        rotation={[Math.PI, 0, Math.PI]}
        fillOpacity={opacity}
      >
        {pos.z + half + 1}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-x={0.501 * scale}
        rotation={[0, Math.PI / 2, 0]}
        fillOpacity={opacity}
      >
        {newSize - (pos.x + half)}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-x={-0.501 * scale}
        rotation={[0, -Math.PI / 2, 0]}
        fillOpacity={opacity}
      >
        {pos.x + half + 1}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-y={0.501 * scale}
        rotation={[-Math.PI / 2, 0, 0]}
        fillOpacity={opacity}
      >
        {newSize - (pos.y + half)}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-y={-0.501 * scale}
        rotation={[Math.PI / 2, 0, 0]}
        fillOpacity={opacity}
      >
        {pos.y + half + 1}
      </Text>
    </group>
  );
};

export default CubeText;
