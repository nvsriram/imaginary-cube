import { Text } from "@react-three/drei";
import { Vector3 } from "three";

interface ICubeText {
  size: number;
  fractal: number;
  pos: Vector3;
}

const CubeText = ({ size, fractal, pos }: ICubeText) => {
  const newSize = Math.pow(size, Math.pow(2, fractal));
  const scale = size / newSize;
  const half = (newSize - 1) / 2;
  return (
    <>
      <Text font="monospace" fontSize={0.5 * scale} position-z={0.501 * scale}>
        {newSize - (pos.z + half)}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-z={-0.501 * scale}
        rotation={[Math.PI, 0, Math.PI]}
      >
        {pos.z + half + 1}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-x={0.501 * scale}
        rotation={[0, Math.PI / 2, 0]}
      >
        {newSize - (pos.x + half)}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-x={-0.501 * scale}
        rotation={[0, -Math.PI / 2, 0]}
      >
        {pos.x + half + 1}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-y={0.501 * scale}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        {newSize - (pos.y + half)}
      </Text>
      <Text
        font="monospace"
        fontSize={0.5 * scale}
        position-y={-0.501 * scale}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {pos.y + half + 1}
      </Text>
    </>
  );
};

export default CubeText;
