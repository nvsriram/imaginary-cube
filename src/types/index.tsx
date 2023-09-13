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
  showEdges: boolean;
}

export const ShapeMap = new Map<string, FC<IShape>>([
  ["cube", Cube],
  ["tetrahedron", Tetrahedron],
  ["cuboctahedron", Cuboctahedron],
  ["hexagonal bipyramid", HexagonalBipyramid],
  ["octahedron", Octahedron],
]);

export const BETA_SUFFIX = " *";

const ShapeMapKeys = Array.from(ShapeMap.keys());
export const DefaultShapeMapKeys = ["cube", "tetrahedron"];
export const BetaShapeMapKeys = ShapeMapKeys.filter(
  (key) => !DefaultShapeMapKeys.includes(key)
).map((key) => key + BETA_SUFFIX);
