import { ShapeMap } from "../types";

const BETA_SUFFIX = " *";

const convertToBetaShape = (shapes: string[]) =>
  shapes.map((key) => key + BETA_SUFFIX);

const parseShapeKey = (key: string) => key.replace(BETA_SUFFIX, "");

const getRandomShape = () => {
  const keys = Array.from(ShapeMap.keys());
  return ShapeMap.get(keys[Math.floor(Math.random() * keys.length)]);
};

export { convertToBetaShape, parseShapeKey, getRandomShape };
