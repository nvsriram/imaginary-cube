import { AllShapeMapKeys, DefaultShapeMapKeys, ShapeMap } from "../types";

const BETA_SUFFIX = " *";

const convertToBetaShape = (shapes: string[]) =>
  shapes.map((key) => key + BETA_SUFFIX);

const parseShapeKey = (key: string) => key.replace(BETA_SUFFIX, "");

const getRandomShape = (isBeta: boolean) => {
  const keys = isBeta ? AllShapeMapKeys : DefaultShapeMapKeys;
  return ShapeMap.get(keys[Math.floor(Math.random() * keys.length)]);
};

const getShape = (key: string | undefined, isBeta: boolean) => {
  if (key) {
    return ShapeMap.get(parseShapeKey(key));
  }
  return getRandomShape(isBeta);
};

export { convertToBetaShape, getShape };
