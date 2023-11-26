const GlobalControlOptions = [
  { keys: ["click"], action: "start/stop rotation" },
  { keys: ["hover"], action: "slow down rotation" },
  { keys: ["p"], action: "open/close pause menu" },
  { action: "use the side panel to control the fractal cube" },
];

const SidePanelControls = [
  "shape",
  "scale",
  "size",
  "iterations",
  "color",
  "opacity",
  "showText",
  "showEdges",
  "showAxes",
  "showGrid",
  "showStats",
  "betaMode",
] as const;

export { GlobalControlOptions, SidePanelControls };
