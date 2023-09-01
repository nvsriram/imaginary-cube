interface ILights {
  distance: number;
}

const Lights = ({ distance }: ILights) => {
  return (
    <>
      <directionalLight position={[distance, 0, 0]} castShadow />
      <directionalLight position={[0, distance, 0]} castShadow />
      <directionalLight position={[0, 0, distance]} castShadow />
    </>
  );
};

export default Lights;
