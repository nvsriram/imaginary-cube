import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex w-full flex-col items-center pt-5 sm:justify-end">
      <a
        className="flex flex-col items-center gap-3 pl-2 text-3xl font-semibold text-folderTextColor outline-none sm:mr-auto sm:flex-row sm:gap-2 sm:text-2xl"
        href={`/`}
      >
        <img src={Logo} className="h-15 sm:h-11" />
        <h1>Imaginary Cube Visualizer</h1>
      </a>
    </nav>
  );
};

export default Navbar;
