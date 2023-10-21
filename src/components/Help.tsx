import { ControlOptions } from "../types";

const Help = () => {
  return (
    <div className="flex flex-col text-highlight1">
      {ControlOptions.map(({ keys, action }) => (
        <div>
          <span>{action}</span>
          <div>
            {keys?.map((key, idx) => (
              <span
                key={idx}
                className="inline-flex min-w-[24px] items-center justify-center rounded-sm border border-b-4 border-transparent border-b-highlight2 bg-highlight3 p-1 text-sm text-elevation2"
              >
                {key}
              </span>
            ))}
          </div>
        </div>
      ))}
      {/* <div>
        <span className="text-accent3">Hover</span> to slow down rotation
      </div>
      <div>
        <span className="text-accent2">Click</span> to start/stop rotation
      </div>
      <div>Use side panel to control fractal cube</div>
      <div>
        <span className="text-accent1">reset scene</span> resets rotation and
        camera
      </div>
      <div>
        <span className="inline-flex min-w-[24px] items-center justify-center rounded-sm border border-b-4 border-transparent border-b-highlight2 bg-highlight3 p-1 text-sm text-elevation2">
          p
        </span>{" "}
        to open pause menu
      </div>
    </div> */}
    </div>
  );
};

export default Help;
