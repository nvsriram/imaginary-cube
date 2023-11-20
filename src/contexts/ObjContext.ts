import { createContext, useContext } from "react";
import { ObjContextType } from "@/types";

export const ObjContext = createContext<ObjContextType | null>(null);

export const useObj = () => {
  const context = useContext(ObjContext);

  if (!context) {
    throw new Error("useObj must be used within ObjContextProvider");
  }
  return context;
};
