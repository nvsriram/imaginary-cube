import { useMemo } from "react";
import { MeshStandardMaterial } from "three";
import Screen from "./Screen";

interface IScreens {
  scale: number;
}

const Screens = ({ scale }: IScreens) => {
  const material = useMemo(() => new MeshStandardMaterial({}), []);

  return (
    <group>
      <Screen
        material={material}
        scale={scale}
        position={[0, -scale / 2, 0]}
        rotation-x={-Math.PI / 2}
      />
      <Screen
        material={material}
        scale={scale}
        position={[0, 0, -scale / 2]}
        rotation-x={0}
      />
      <Screen
        material={material}
        scale={scale}
        position={[-scale / 2, 0, 0]}
        rotation-y={Math.PI / 2}
      />
    </group>
  );
};

export default Screens;
