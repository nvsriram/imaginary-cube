const IntroSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-3 text-center font-normal text-folderWidgetColor sm:text-start">
      <p className="w-full">
        an{" "}
        <a
          href="https://www.i.h.kyoto-u.ac.jp/users/tsuiki/imaginarycube-e.html"
          className="text-vivid1 underline underline-offset-4"
        >
          imaginary cube
        </a>{" "}
        is a 3D object that has square silhouettes in the three orthogonal
        directions.
      </p>
      <p className="w-full">
        mess around with these potential imaginary cubes to witness the
        interesting shadows they form! 🎉
      </p>
    </section>
  );
};

export default IntroSection;
