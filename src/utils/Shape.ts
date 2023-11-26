import { AllShapeMapKeys, DefaultShapeMapKeys } from "@/constants";
import { ShapeMap } from "@/types";

const BETA_SUFFIX = " *";

const convertToBetaShape = (shapes: string[]) =>
  shapes.map((key) => key + BETA_SUFFIX);

const parseShapeKey = (key: string) => key.replace(BETA_SUFFIX, "");

const getRandomShape = (ShapeMap: ShapeMap, isBeta: boolean) => {
  const keys = isBeta ? AllShapeMapKeys : DefaultShapeMapKeys;
  return ShapeMap.get(
    parseShapeKey(keys[Math.floor(Math.random() * keys.length)]),
  );
};

const getShape = (
  ShapeMap: ShapeMap,
  key: string | undefined,
  isBeta: boolean,
) => {
  if (key) {
    return ShapeMap.get(parseShapeKey(key));
  }
  return getRandomShape(ShapeMap, isBeta);
};

export { convertToBetaShape, getShape };
