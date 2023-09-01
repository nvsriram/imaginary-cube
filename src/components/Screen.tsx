import { Plane } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

interface IScreen {
  scale: number;
  position: [number, number, number];
  "rotation-x"?: number;
  "rotation-y"?: number;
}

const Screen = ({ scale, ...props }: IScreen) => {
  const mesh = useMemo(() => new THREE.MeshStandardMaterial(), []);

  return (
    <Plane args={[scale, scale]} material={mesh} receiveShadow {...props} />
  );
};

export default Screen;
