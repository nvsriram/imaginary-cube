import { Plane } from "@react-three/drei";
import * as THREE from "three";

export interface IScreen {
  material: THREE.Material;
  scale: number;
  position: [number, number, number];
  "rotation-x"?: number;
  "rotation-y"?: number;
}

export const Screen = ({ scale, ...props }: IScreen) => (
  <Plane receiveShadow args={[scale, scale]} {...props} />
);
