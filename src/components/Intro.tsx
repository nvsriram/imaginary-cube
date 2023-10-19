import { Loader } from "@react-three/drei";
import { ReactNode, Suspense, useState } from "react";
import Help from "./Help";
import Ready from "./Ready";

interface IIntro {
  children: ReactNode;
}

// const MyLoader = () => {
//   const { progress } = useProgress();

//   return <span>{progress.toFixed()} %</span>;
// };

const Intro = ({ children }: IIntro) => {
  const [ready, setReady] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Suspense fallback={<Ready setReady={setReady} />}>{children}</Suspense>
      {!clicked && (
        <div
          className={`absolute left-0 top-0 z-[10001] flex h-full w-full flex-col items-center justify-center bg-elevation2 transition-all ${
            ready && clicked ? "opacity-0" : "opacity-90"
          }`}
        >
          {!ready ? (
            <Loader />
          ) : (
            <>
              <Help />
              <button
                className="text-highlight3"
                onClick={() => ready && setClicked(true)}
              >
                Click to continue
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Intro;
