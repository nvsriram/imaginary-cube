import { BETA_SUFFIX } from "../types";

export * from "./CubeGrid";
export * from "./Fractal";
export * from "./LatinSquare";

export const parseShapeKey = (key: string) => key.replace(BETA_SUFFIX, "");
