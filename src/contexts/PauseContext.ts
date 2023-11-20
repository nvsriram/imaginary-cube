import { PauseContextType } from "@/types";
import { createContext, useContext } from "react";

export const PauseContext = createContext<PauseContextType | null>(null);

export const usePauseContext = () => {
  const context = useContext(PauseContext);

  if (!context) {
    throw new Error("usePauseContext must be used within PauseContextProvider");
  }
  return context;
};
