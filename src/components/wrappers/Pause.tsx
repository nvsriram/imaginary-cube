import { useProgress } from "@react-three/drei";
import { ReactNode, Suspense, useEffect, useMemo, useState } from "react";

import { Help, Kbd, Ready, WaitingAnimation } from "../ui";

import { usePause } from "@/hooks";

export interface IPause {
  children: ReactNode;
}

export const Pause = ({ children }: IPause) => {
  const [ready, setReady] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const { paused, setPaused } = usePause();
  const { progress } = useProgress();

  useEffect(() => {
    if (!paused) {
      setIsIntro(false);
    }
  }, [paused]);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(progress === 100), 500);
    return () => clearTimeout(timeout);
  }, [progress]);

  const buttonText = useMemo(() => {
    if (!ready) {
      return <span>loading</span>;
    }
    return (
      <span>
        click or press <Kbd text={"p"} /> to {isIntro ? "continue" : "unpause"}
      </span>
    );
  }, [ready, isIntro]);

  return (
    <>
      <Suspense fallback={<Ready setReady={setReady} />}>{children}</Suspense>
      {paused && (
        <div className="absolute left-0 top-0 z-[10001] flex h-full w-full flex-col items-center justify-center bg-elevation2 opacity-95 transition-all">
          <div className="flex flex-col items-center justify-center gap-5">
            <Help />
            <button
              className="flex items-center justify-center gap-1 text-highlight3"
              onClick={() => {
                setPaused(false);
                isIntro && setIsIntro(false);
              }}
            >
              {buttonText}
              {!ready && <WaitingAnimation />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
