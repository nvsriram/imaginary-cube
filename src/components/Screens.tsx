import Screen from "./Screen";

interface IScreens {
  scale: number;
}

const Screens = ({ scale }: IScreens) => {
  return (
    <>
      <Screen
        rotation-x={-Math.PI / 2}
        position={[0, -scale / 2, 0]}
        scale={scale}
      />
      <Screen rotation-x={0} position={[0, 0, -scale / 2]} scale={scale} />
      <Screen
        rotation-y={Math.PI / 2}
        position={[-scale / 2, 0, 0]}
        scale={scale}
      />
    </>
  );
};

export default Screens;
