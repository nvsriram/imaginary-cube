import { Loader } from "@react-three/drei";
import { useRef } from "react";
import FractalCanvas from "./components/FractalCanvas";

const App = () => {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <main className="container sm:my-3 flex flex-1 flex-col mx-auto">
      <section
        ref={sectionRef}
        className="relative w-full h-full flex flex-col mt-5 mx-auto px-3 lg:px-0 items-center justify-center"
      >
        <h1 className="text-folderTextColor">Imaginary Cube Visualizer</h1>
        <FractalCanvas ref={sectionRef} />
        <Loader />
      </section>
    </main>
  );
};

export default App;
