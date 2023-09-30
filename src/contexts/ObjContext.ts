import { createContext, useContext } from "react";
import { ObjContextType } from "../types";

const ObjContext = createContext<ObjContextType | null>(null);

const useObj = () => {
  const context = useContext(ObjContext);

  if (!context) {
    throw new Error("useObj must be used within ObjContextProvider");
  }
  return context;
};

export { ObjContext, useObj };
