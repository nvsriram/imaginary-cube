import { Plane } from "@react-three/drei";
import * as THREE from "three";

interface IScreen {
  material: THREE.Material;
  scale: number;
  position: [number, number, number];
  "rotation-x"?: number;
  "rotation-y"?: number;
}

const Screen = ({ scale, ...props }: IScreen) => (
  <Plane args={[scale, scale]} receiveShadow {...props} />
);

export default Screen;
