import { useState } from "react";

import { PauseContext } from "@/contexts";
import { IProvider } from "@/types";

export const PauseContextProvider = ({ children }: IProvider) => {
  const [paused, setPaused] = useState(true);

  return (
    <PauseContext.Provider value={{ paused, setPaused }}>
      {children}
    </PauseContext.Provider>
  );
};
