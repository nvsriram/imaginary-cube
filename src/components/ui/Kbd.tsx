export interface IKbd {
  text: string;
}

export const Kbd = ({ text }: IKbd) => {
  return (
    <span className="inline-flex min-w-[24px] items-center justify-center rounded-sm border border-b-4 border-transparent border-b-highlight2 bg-highlight3 p-1 text-sm text-elevation2">
      {text}
    </span>
  );
};
