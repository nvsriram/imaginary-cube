import Footer from "./components/Footer";
import FractalCanvasSection from "./components/FractalCanvasSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import Pause from "./components/Pause";
import ReferenceSection from "./components/ReferenceSection";
import Provider from "./providers/Provider";

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
