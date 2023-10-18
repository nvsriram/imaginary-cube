import { Dispatch, SetStateAction, useEffect } from "react";

interface IReady {
  setReady: Dispatch<SetStateAction<boolean>>;
}

const Ready = ({ setReady }: IReady) => {
  useEffect(() => () => void setReady(true), [setReady]);
  return null;
};

export default Ready;
