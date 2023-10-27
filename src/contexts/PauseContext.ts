import { createContext, useContext } from "react";
import { PauseContextType } from "../types";

const PauseContext = createContext<PauseContextType | null>(null);

const usePauseContext = () => {
  const context = useContext(PauseContext);

  if (!context) {
    throw new Error("usePauseContext must be used within PauseContextProvider");
  }
  return context;
};

export { PauseContext, usePauseContext };
