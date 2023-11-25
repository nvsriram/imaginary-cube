import { createContext, useContext } from "react";

import { PauseContextType } from "@/types";

export const PauseContext = createContext<PauseContextType | null>(null);

export const usePauseContext = () => {
  const context = useContext(PauseContext);

  if (!context) {
    throw new Error("usePauseContext must be used within PauseContextProvider");
  }
  return context;
};
