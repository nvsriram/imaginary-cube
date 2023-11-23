import { Dispatch, SetStateAction, useEffect } from "react";

export interface IReady {
  setReady: Dispatch<SetStateAction<boolean>>;
}

export const Ready = ({ setReady }: IReady) => {
  useEffect(() => () => void setReady(true), [setReady]);
  return null;
};
