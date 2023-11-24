import { PauseContextProvider, ObjContextProvider } from "@/providers";
import { IProvider } from "@/types";

export const Provider = ({ children }: IProvider) => {
  return (
    <PauseContextProvider>
      <ObjContextProvider>{children}</ObjContextProvider>
    </PauseContextProvider>
  );
};

export default Provider;
