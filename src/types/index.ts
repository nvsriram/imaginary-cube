import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { BufferGeometry, Group, Vector3 } from "three";

import { SidePanelControls } from "@/constants/Controls";

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
type ShapeMap = Map<string, Shape>;

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
  ShapeMap,
  SidePanelControl,
};
