import { FC } from "react";
import { BufferGeometry, Group, Vector3 } from "three";
import Cube from "../components/Cube";
import Cuboctahedron from "../components/Cuboctahedron";
import HexagonalBipyramid from "../components/HexagonalBipyramid";
import Octahedron from "../components/Octahedron";
import Tetrahedron from "../components/Tetrahedron";
import { convertToBetaShape } from "../utils";

// Base types
type CubeGrid = boolean[][][];
type CubePositions = Vector3[];
type LatinSquare = number[][];

// Context types
type ObjContextType = {
  obj: Group;
  geometry: BufferGeometry | null;
};

// Control types
const ControlOptions = [
  { keys: ["Click"], action: "start/stop rotation" },
  { keys: ["Hover"], action: "slow down rotation" },
  { keys: ["p"], action: "open/close pause menu" },
  { action: "Use the side panel to control the fractal cube" },
];

// Shape component types
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
type Shape = FC<IShape>;
const ShapeMap = new Map<string, Shape>([
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

export { AllShapeMapKeys, ControlOptions, DefaultShapeMapKeys, ShapeMap };
export type {
  CubeGrid,
  CubePositions,
  IShape,
  LatinSquare,
  ObjContextType,
  Shape,
};
