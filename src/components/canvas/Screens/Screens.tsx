import { useMemo } from "react";
import { MeshStandardMaterial } from "three";

import { Screen } from "./Screen";

export interface IScreens {
  scale: number;
}

export const Screens = ({ scale }: IScreens) => {
  const material = useMemo(() => new MeshStandardMaterial({}), []);

  return (
    <group>
      <Screen
        material={material}
        position={[0, -scale / 2, 0]}
        rotation-x={-Math.PI / 2}
        scale={scale}
      />
      <Screen
        material={material}
        position={[0, 0, -scale / 2]}
        rotation-x={0}
        scale={scale}
      />
      <Screen
        material={material}
        position={[-scale / 2, 0, 0]}
        rotation-y={Math.PI / 2}
        scale={scale}
      />
    </group>
  );
};
