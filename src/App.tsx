import Footer from "./components/Footer";
import FractalCanvas from "./components/FractalCanvas";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ObjContextProvider from "./contexts/ObjContextProvider";

const App = () => {
  return (
    <Intro>
      <div className="container mx-auto flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto flex h-full w-full flex-1 flex-col gap-2 overflow-y-scroll px-3 pb-5 sm:pb-10 lg:px-0">
          <section className="flex h-full w-full flex-col items-center justify-center pt-5">
            <details className="h-full w-full py-3 font-normal text-folderWidgetColor">
              <summary>Description</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id ex ullamcorper, fringilla lectus ut, viverra lacus.
                Nulla cursus ultricies egestas. Pellentesque eget quam est.
                Donec mattis quam nec dui dignissim, sit amet efficitur mauris
                dapibus. Fusce urna nisi, posuere a efficitur a, efficitur quis
                lectus. Aenean fermentum tellus metus, sed euismod turpis
                placerat sed. Pellentesque magna massa, consequat eu arcu id,
                congue pellentesque libero. Sed feugiat nunc augue, eu iaculis
                quam tempus sit amet. Aliquam erat volutpat. Donec ligula orci,
                accumsan vel odio quis, dapibus tristique ipsum. In commodo
                sagittis orci, at vehicula nisl tincidunt vel. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nam tincidunt tincidunt
                nisi, at varius neque consectetur in. Nullam cursus eros elit,
                elementum imperdiet sapien pretium eget. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Maecenas fringilla et est sit amet mollis. In
                efficitur feugiat diam, eu congue odio posuere in. Mauris arcu
                tellus, ultricies eu molestie in, varius ut justo. Duis et urna
                enim. Fusce non dictum tortor. Fusce orci lacus, faucibus vel
                dui id, gravida accumsan felis. Fusce pulvinar semper
                pellentesque. Sed ut felis non risus ultrices gravida. Proin
                sollicitudin non neque pulvinar gravida. Vestibulum pulvinar
                quam et ultricies luctus. Cras eleifend viverra orci eget
                luctus. Pellentesque eget velit mollis, maximus purus eget,
                feugiat massa. Pellentesque vel dictum quam. Cras elit tortor,
                convallis at viverra id, sollicitudin et nulla. Nam dapibus
                molestie pulvinar. Sed ut porttitor dui, a porta nulla. Maecenas
                nec nibh sagittis, tincidunt sapien in, malesuada dolor.
                Curabitur volutpat mi sit amet sem varius, dictum dignissim
                sapien rhoncus. Etiam suscipit euismod mi nec varius. Fusce
                dictum dignissim blandit. Vestibulum condimentum, justo quis
                feugiat pharetra, libero eros cursus mauris, vitae scelerisque
                diam arcu et turpis. Vestibulum ut ante in tortor volutpat
                maximus id vel quam. Integer non augue sed erat vehicula
                dignissim. Nam porttitor eu tellus eu maximus. Suspendisse
                sollicitudin scelerisque dui, ut dictum sem. Fusce vel est nisl.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aenean leo nisl, pulvinar ut
                placerat ut, eleifend in magna. Morbi hendrerit nec orci sed
                tristique. Mauris laoreet aliquam tellus ac gravida. Nam laoreet
                accumsan sem ac suscipit. Vestibulum sodales libero at dolor
                vehicula, quis convallis mauris vehicula. Quisque tellus mauris,
                tincidunt non turpis a, consectetur euismod mi. Fusce sed congue
                massa, at elementum mi.
              </p>
            </details>
          </section>
          <section className="flex h-full w-full grow flex-col">
            <ObjContextProvider>
              <FractalCanvas />
            </ObjContextProvider>
          </section>
        </main>
        <Footer />
      </div>
    </Intro>
  );
};

export default App;
