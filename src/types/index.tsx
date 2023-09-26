import { FC } from "react";
import { Vector3 } from "three";
import Cube from "../components/Cube";
import Cuboctahedron from "../components/Cuboctahedron";
import HexagonalBipyramid from "../components/HexagonalBipyramid";
import Octahedron from "../components/Octahedron";
import Tetrahedron from "../components/Tetrahedron";
import { convertToBetaShape } from "../utils";

type CubeGrid = boolean[][][];
type CubePositions = Vector3[];
type LatinSquare = number[][];

interface IShape {
  pos: THREE.Vector3;
  initialScale: number;
  scale: number;
  size: number;
  material: THREE.Material;
  showText: boolean;
  opacity: number;
  showEdges: boolean;
}

const ShapeMap = new Map<string, FC<IShape>>([
  ["cube", Cube],
  ["tetrahedron", Tetrahedron],
  ["cuboctahedron", Cuboctahedron],
  ["hexagonal bipyramid", HexagonalBipyramid],
  ["octahedron", Octahedron],
]);

const ShapeMapKeys = Array.from(ShapeMap.keys());
const DefaultShapeMapKeys = ["cube", "tetrahedron"];
const BetaShapeMapKeys = convertToBetaShape(
  ShapeMapKeys.filter((key) => !DefaultShapeMapKeys.includes(key)),
);
const AllShapeMapKeys = [...DefaultShapeMapKeys, ...BetaShapeMapKeys];

export { AllShapeMapKeys, DefaultShapeMapKeys, ShapeMap };
export type { CubeGrid, CubePositions, IShape, LatinSquare };
