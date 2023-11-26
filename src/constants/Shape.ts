import { Shape } from "@/types";
import { convertToBetaShape } from "@/utils";
import { lazy } from "react";

const Cube = lazy(() =>
  import("@/components/shapes/Cube").then((module) => ({
    default: module.Cube,
  })),
);
const Cuboctahedron = lazy(() =>
  import("@/components/shapes/Cuboctahedron").then((module) => ({
    default: module.Cuboctahedron,
  })),
);
const HexagonalBipyramid = lazy(() =>
  import("@/components/shapes/HexagonalBipyramid").then((module) => ({
    default: module.HexagonalBipyramid,
  })),
);
const Tetrahedron = lazy(() =>
  import("@/components/shapes/Tetrahedron").then((module) => ({
    default: module.Tetrahedron,
  })),
);
const Octahedron = lazy(() =>
  import("@/components/shapes/Octahedron").then((module) => ({
    default: module.Octahedron,
  })),
);

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

export { AllShapeMapKeys, DefaultShapeMapKeys, ShapeMap };
