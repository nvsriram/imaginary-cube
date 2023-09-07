import { FC } from "react";
import { Vector3 } from "three";
import Cube from "../components/Cube";
import Cuboctahedron from "../components/Cuboctahedron";
import HexagonalBipyramid from "../components/HexagonalBipyramid";
import Octahedron from "../components/Octahedron";
import Tetrahedron from "../components/Tetrahedron";

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
  ["Cuboctahedron", Cuboctahedron],
  ["Hexagonal Bipyramid", HexagonalBipyramid],
  ["Octahedron", Octahedron],
]);

export const BETA_SUFFIX = " *";

const ShapeMapKeys = Array.from(ShapeMap.keys());
export const DefaultShapeMapKeys = ShapeMapKeys.filter((key) =>
  ["Cube", "Tetrahedron"].includes(key)
);
export const BetaShapeMapKeys = ShapeMapKeys.filter(
  (key) => !["Cube", "Tetrahedron"].includes(key)
).map((key) => key + BETA_SUFFIX);
