import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="container w-full mx-auto py-5 flex flex-col items-center sm:justify-end">
      <a
        className="text-3xl sm:text-2xl flex flex-col sm:flex-row gap-3 sm:gap-2 items-center font-semibold sm:mr-auto pl-2 text-folderTextColor outline-none"
        href={`/`}
      >
        <img src={Logo} className="h-15 sm:h-11" />
        <h1>Imaginary Cube Visualizer</h1>
      </a>
    </nav>
  );
};

export default Navbar;
