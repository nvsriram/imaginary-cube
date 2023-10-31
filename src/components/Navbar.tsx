import Logo from "../assets/logo.svg";
import { usePauseContext } from "../contexts/PauseContext";

const Navbar = () => {
  const { paused } = usePauseContext();

  return (
    <nav
      className={`container ${
        paused ? "z-[10002]" : "z-auto"
      } mx-auto flex w-full flex-col items-center pt-5 sm:justify-end`}
    >
      <a
        className="flex flex-col items-center gap-3 pl-2 text-3xl font-semibold text-folderTextColor outline-none sm:mr-auto sm:flex-row sm:gap-2 sm:text-2xl"
        href="#"
      >
        <img src={Logo} className=" h-20 sm:h-11" />
        <h1>imaginary cube visualizer</h1>
      </a>
    </nav>
  );
};

export default Navbar;
