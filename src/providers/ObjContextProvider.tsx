import { useLoader } from "@react-three/fiber";
import { useMemo, useState } from "react";
import { BufferGeometry, Group, Mesh } from "three";
import { OBJLoader } from "three-stdlib";

import { ObjContext } from "@/contexts";
import { IProvider } from "@/types";

export const ObjContextProvider = ({ children }: IProvider) => {
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
