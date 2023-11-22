export interface ILights {
  distance: number;
}

export const Lights = ({ distance }: ILights) => (
  <group>
    <directionalLight position={[-distance, 0, 0]} castShadow />
    <directionalLight position={[0, -distance, 0]} castShadow />
    <directionalLight position={[0, 0, -distance]} castShadow />
    <directionalLight position={[distance, 0, 0]} castShadow />
    <directionalLight position={[0, distance, 0]} castShadow />
    <directionalLight position={[0, 0, distance]} castShadow />
  </group>
);
