import { useState } from "react";
import { PauseContext } from "../contexts/PauseContext";
import { IProvider } from "../types";

const PauseContextProvider = ({ children }: IProvider) => {
  const [paused, setPaused] = useState(true);

  return (
    <PauseContext.Provider value={{ paused, setPaused }}>
      {children}
    </PauseContext.Provider>
  );
};

export default PauseContextProvider;
