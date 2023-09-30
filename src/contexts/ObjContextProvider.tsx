import { ReactNode, useMemo, useState } from "react";
import { Group, BufferGeometry, Mesh } from "three";
import { ObjContext } from "./ObjContext";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";

const ObjContextProvider = ({ children }: { children: ReactNode }) => {
  const obj: Group = useLoader(OBJLoader, "cuboctahedron.obj");
  const [geometry, setGeometry] = useState<BufferGeometry | null>(null);

  useMemo(() => {
    obj.traverse((child) => {
      if (child instanceof Mesh) {
        setGeometry(child.geometry);
      }
    });
  }, [obj]);

  return (
    <ObjContext.Provider value={{ obj, geometry }}>
      {children}
    </ObjContext.Provider>
  );
};

export default ObjContextProvider;
