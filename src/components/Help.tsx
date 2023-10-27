import { ControlOptions } from "../types";
import Kbd from "./Kbd";

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-highlight1">
      {ControlOptions.map(({ keys, action }, idx) => (
        <div
          key={idx}
          className="inline-flex h-full w-full flex-row items-center justify-between"
        >
          <span>{action}</span>
          <div>{keys?.map((key, idx) => <Kbd text={key} key={idx} />)}</div>
        </div>
      ))}
    </div>
  );
};

export default Help;
