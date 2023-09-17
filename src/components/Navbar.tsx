const Navbar = () => {
  return (
    <nav className="container w-full mx-auto py-5 flex flex-col items-center sm:justify-end">
      <a
        className="text-3xl sm:text-2xl lg:text-2xl flex font-semibold sm:mr-auto pl-2 text-folderTextColor outline-none"
        href={`/`}
      >
        <h1>Imaginary Cube Visualizer</h1>
      </a>
    </nav>
  );
};

export default Navbar;
