import {
  Footer,
  FractalCanvasSection,
  IntroSection,
  Navbar,
  Pause,
  Provider,
  ReferenceSection,
} from "./components";

const App = () => {
  return (
    <Provider>
      <Pause>
        <div className="container mx-auto flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto flex h-full w-full flex-1 flex-col gap-2 px-3 py-5 sm:py-10 lg:px-0">
            <IntroSection />
            <FractalCanvasSection />
            <ReferenceSection />
          </main>
          <Footer />
        </div>
      </Pause>
    </Provider>
  );
};

export default App;
