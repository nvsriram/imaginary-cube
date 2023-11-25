export interface ILights {
  distance: number;
}

export const Lights = ({ distance }: ILights) => (
  <group>
    <directionalLight castShadow position={[-distance, 0, 0]} />
    <directionalLight castShadow position={[0, -distance, 0]} />
    <directionalLight castShadow position={[0, 0, -distance]} />
    <directionalLight castShadow position={[distance, 0, 0]} />
    <directionalLight castShadow position={[0, distance, 0]} />
    <directionalLight castShadow position={[0, 0, distance]} />
  </group>
);
