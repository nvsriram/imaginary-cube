import { useEffect } from "react";
import { usePauseContext } from "../contexts/PauseContext";

const usePause = (pauseCode = "KeyP") => {
  const { paused, setPaused } = usePauseContext();

  useEffect(() => {
    const onDocumentKey = (e: KeyboardEvent) => {
      if (e.code === pauseCode && e.type === "keydown") {
        setPaused((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onDocumentKey);
    document.addEventListener("keyup", onDocumentKey);
    return () => {
      document.removeEventListener("keydown", onDocumentKey);
      document.removeEventListener("keyup", onDocumentKey);
    };
  });

  return { paused, setPaused };
};

export default usePause;
