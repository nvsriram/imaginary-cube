import { ReactNode } from "react";
import ObjContextProvider from "./ObjContextProvider";
import PauseContextProvider from "./PauseContextProvider";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => {
  return (
    <PauseContextProvider>
      <ObjContextProvider>{children}</ObjContextProvider>
    </PauseContextProvider>
  );
};

export default Provider;
