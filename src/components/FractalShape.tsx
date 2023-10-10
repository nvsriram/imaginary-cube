import { useMemo } from "react";
import { IShape } from "../types";
import { getShape } from "../utils";

interface IFractalShape extends IShape {
  shape: string;
  betaMode: boolean;
  randomize: number;
}

const FractalShape = ({
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
    () => getShape(randomize > 0 ? undefined : key, betaMode),
    [randomize, key, betaMode],
  );
  if (!Shape) {
    return null;
  }
  return (
    <Shape
      pos={pos}
      initialScale={initialScale}
      scale={scale}
      size={size}
      material={material}
      opacity={opacity}
      showText={showText}
      showEdges={showEdges}
    />
  );
};

export default FractalShape;
