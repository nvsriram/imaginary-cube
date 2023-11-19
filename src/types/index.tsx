import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { BufferGeometry, Group, Vector3 } from "three";
import {
  Cube,
  Cuboctahedron,
  HexagonalBipyramid,
  Octahedron,
  Tetrahedron,
} from "@/components/shapes";
import { convertToBetaShape } from "@/utils";

// Base types
type CubeGrid = boolean[][][];
type CubePositions = Vector3[];
type LatinSquare = number[][];

// Context types
interface IProvider {
  children: ReactNode;
}

type PauseContextType = {
  paused: boolean;
  setPaused: Dispatch<SetStateAction<boolean>>;
};

type ObjContextType = {
  obj: Group;
  geometry: BufferGeometry | null;
};

// Control types
const GlobalControlOptions = [
  { keys: ["click"], action: "start/stop rotation" },
  { keys: ["hover"], action: "slow down rotation" },
  { keys: ["p"], action: "open/close pause menu" },
  { action: "use the side panel to control the fractal cube" },
];

const SidePanelControls = [
  "shape",
  "scale",
  "size",
  "iterations",
  "color",
  "opacity",
  "showText",
  "showEdges",
  "showAxes",
  "showGrid",
  "showStats",
  "betaMode",
] as const;
type SidePanelControl = (typeof SidePanelControls)[number];
type LoaderData = Record<SidePanelControl, string | boolean | number | null>;

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

export {
  AllShapeMapKeys,
  DefaultShapeMapKeys,
  GlobalControlOptions,
  ShapeMap,
  SidePanelControls,
};
export type {
  CubeGrid,
  CubePositions,
  IProvider,
  IShape,
  LatinSquare,
  LoaderData,
  ObjContextType,
  PauseContextType,
  Shape,
  SidePanelControl,
};
