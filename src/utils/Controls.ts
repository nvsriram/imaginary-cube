import { SidePanelControls } from "@/constants";
import { LoaderData, SidePanelControl } from "@/types";

const deserializeControls = (searchParams: URLSearchParams): LoaderData => {
  const newControls = {} as LoaderData;
  SidePanelControls.forEach((control) => {
    const value = searchParams.get(control);
    if (value === null) {
      // null
      newControls[control as SidePanelControl] = null;
    } else {
      switch (control) {
        // boolean
        case "showText":
        case "showEdges":
        case "showAxes":
        case "showGrid":
        case "showStats":
        case "betaMode":
          newControls[control as SidePanelControl] =
            value.toLowerCase() !== "false";
          break;
        // number
        case "scale":
        case "size":
        case "iterations":
        case "opacity":
          newControls[control as SidePanelControl] = isNaN(Number(value))
            ? null
            : Number(value);
          break;
        // string
        case "shape":
        case "color":
          newControls[control as SidePanelControl] = value;
          break;
        default:
          newControls[control as SidePanelControl] = value;
      }
    }
  });
  return newControls;
};

const serializeControls = (controls: LoaderData) => {
  const newControls: Record<string, string> = {};
  Object.entries(controls).forEach(([control, value]) => {
    if (!SidePanelControls.includes(control as SidePanelControl)) {
      return;
    }

    if (value) {
      newControls[control] = value.toString();
    }
  });
  return newControls;
};

export { deserializeControls, serializeControls };
