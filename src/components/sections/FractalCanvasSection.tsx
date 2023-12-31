import { FractalCanvas } from "../fractal";

export const FractalCanvasSection = () => {
  return (
    <section className="flex h-full w-full grow flex-col py-3 sm:py-5">
      <FractalCanvas />
    </section>
  );
};
