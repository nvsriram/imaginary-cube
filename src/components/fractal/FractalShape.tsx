import { useMemo } from "react";

import { ShapeMap } from "@/constants";
import { IShape } from "@/types";
import { getShape } from "@/utils";

export interface IFractalShape extends IShape {
  shape: string;
  betaMode: boolean;
  randomize: number;
}

export const FractalShape = ({
  shape: key,
  betaMode,
  randomize,
  pos,
  initialScale,
  scale,
  size,
  material,
  opacity,
  showText,
  showEdges,
}: IFractalShape) => {
  // handle shape
  const Shape = useMemo(
    () => getShape(ShapeMap, randomize === 0 ? key : undefined, betaMode),
    [randomize, key, betaMode],
  );

  if (!Shape) {
    return null;
  }
  return (
    <Shape
      initialScale={initialScale}
      material={material}
      opacity={opacity}
      pos={pos}
      scale={scale}
      showEdges={showEdges}
      showText={showText}
      size={size}
    />
  );
};
