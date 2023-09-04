import { Vector3 } from "three";

export type CubeGrid = boolean[][][];
export type CubePositions = Vector3[];
export type LatinSquare = number[][];

export interface IShape {
  pos: THREE.Vector3;
  initialScale: number;
  size: number;
  iterations: number;
  material: THREE.Material;
  showText: boolean;
  opacity: number;
}

export enum ShapeOption {
  CUBE = "Cube",
  TETRAHEDRON = "Tetrahedron",
}

export const ShapeOptions = Object.values(ShapeOption);
