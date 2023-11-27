import { Shruggie } from "../ui";

export const ReferenceSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center font-normal text-folderWidgetColor">
      <p className="w-full text-center sm:text-start">
        {" "}
        this visualizer is inspired by the work of{" "}
        <a
          className="text-accent3  underline-offset-4 transition duration-200 selection:text-vivid1 hover:text-accent2 hover:underline selection:hover:text-vivid2 focus:text-accent2 focus:underline focus:outline-none selection:focus:text-vivid2 active:text-accent1 active:underline selection:active:text-vivid3"
          href="https://www.i.h.kyoto-u.ac.jp/users/tsuiki/index-e.html"
          target="_blank"
        >
          Hideki Tsuiki
        </a>{" "}
        and this{" "}
        <a
          className="text-accent3 underline-offset-4 transition duration-200 selection:text-vivid1 hover:text-accent2 hover:underline selection:hover:text-vivid2 focus:text-accent2 focus:underline focus:outline-none selection:focus:text-vivid2 active:text-accent1 active:underline selection:active:text-vivid3"
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
