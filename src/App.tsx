import { Loader } from "@react-three/drei";
import FractalCanvas from "./components/FractalCanvas";

const App = () => {
  return (
    <main className="container sm:my-3 flex flex-1 flex-col mx-auto">
      <section className="grow w-full h-full flex flex-col mt-5 mx-auto px-3 lg:px-0 items-center justify-center">
        <h1 className="text-folderTextColor">Imaginary Cube Visualizer</h1>
        <FractalCanvas />
        <Loader />
      </section>
    </main>
  );
};

export default App;
