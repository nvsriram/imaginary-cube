const BETA_SUFFIX = " *";
export const convertToBetaShape = (shapes: string[]) =>
  shapes.map((key) => key + BETA_SUFFIX);
export const parseShapeKey = (key: string) => key.replace(BETA_SUFFIX, "");
