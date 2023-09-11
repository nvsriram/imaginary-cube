import { Loader } from "@react-three/drei";
import "./App.css";
import FractalCanvas from "./components/FractalCanvas";

const App = () => {
  return (
    <main className="bg-neutral-900 container flex flex-col items-center justify-center">
      <h1 className="bg-neutral-800">Imaginary Cube Visualizer</h1>
      <FractalCanvas />
      <Loader />
    </main>
  );
};

export default App;
