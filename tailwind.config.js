/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        elevation1: "#292d39", // bg color of the root panel (main title bar)
        elevation2: "#181c20", // bg color of the rows (main panel color)
        elevation3: "#373c4b", // bg color of the inputs
        accent1: "#0066dc",
        accent2: "#007bff",
        accent3: "#3c93ff",
        highlight1: "#535760",
        highlight2: "#8c92a4",
        highlight3: "#fefefe",
        vivid1: "#ffcc00",
        vivid2: "#ffaa00",
        vivid3: "#ff8800",
        folderWidgetColor: "#8c92a4",
        folderTextColor: "#fefefe",
        toolTipBackground: "#fefefe",
        toolTipText: "#181c20",
      },
      keyframes: {
        jumpingAnimation: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, 3px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      boxShadow: {
        level1: "0 0 9px 0 #00000088",
      },
    },
  },
  plugins: [],
};
