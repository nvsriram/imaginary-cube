import { FC } from "react";
import { Vector3 } from "three";
import Cube from "../components/Cube";
import Tetrahedron from "../components/Tetrahedron";
import Octahedron from "../components/Octahedron";
import Dodecahedron from "../components/Dodecahedron";

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

export const ShapeMap = new Map<string, FC<IShape>>([
  ["Cube", Cube],
  ["Tetrahedron", Tetrahedron],
  ["Cuboctahedron", Cube],
  ["Hexagonal Bipyramid", Dodecahedron],
  ["Triangular Antiprism", Octahedron],
  ["Triangular Antiprismoid", Cube],
  ["Quadric Antiprisoid", Cube],
]);

const ShapeMapKeys = Array.from(ShapeMap.keys());
export const DefaultShapeMapKeys = ShapeMapKeys.filter((key) =>
  ["Cube", "Tetrahedron"].includes(key)
);
export const BetaShapeMapKeys = ShapeMapKeys.filter(
  (key) => !["Cube", "Tetrahedron"].includes(key)
).map((key) => key + " [β]");
