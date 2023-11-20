import { Shruggie } from "../ui";

export const ReferenceSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center font-normal text-folderWidgetColor">
      <p className="w-full text-center sm:text-start">
        {" "}
        this visualizer is inspired by the work of{" "}
        <a
          className="text-accent3 underline-offset-4 hover:text-accent2 hover:underline focus:text-accent2 focus:underline focus:outline-none active:text-accent1 active:underline"
          href="https://www.i.h.kyoto-u.ac.jp/users/tsuiki/index-e.html"
          target="_blank"
        >
          Hideki Tsuiki
        </a>{" "}
        and this{" "}
        <a
          className="text-accent3 underline-offset-4 hover:text-accent2 hover:underline focus:text-accent2 focus:underline focus:outline-none active:text-accent1 active:underline"
          href="https://www.youtube.com/watch?v=Cnhr6VaQKlg"
          target="_blank"
        >
          video by Ben Golber
        </a>
        . <Shruggie />
      </p>
    </section>
  );
};
