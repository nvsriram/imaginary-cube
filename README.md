# Imaginary Cube

A 3D visualizer of various imaginary cubes and their fractals.

## :bulb: Inspiration

- I recently came across this [video](https://www.youtube.com/watch?v=Cnhr6VaQKlg) by Ben Gobler that provides a very succinct yet entertaining introduction into the world of imaginary cubes. It talks about [Hideki Tsuiki](https://www.youtube.com/channel/UCsmJvExpzRQdoPFlOXGRDHg)'s work on imaginary cubes and how one could generate your own imaginary cube fractals.
- In Hideki Tsuiki's words, an imaginary cube is "an object that has square silhoettes in three orthogonal directions." "We call such an object an `Imaginary Cube` because it let you imagine a cube determined by the three silhouettes."
- This got me thinking: what if I could visualize this without having to 3D print it?
- This idea, coupled with my recent interest in three.js, got me reading [more](https://www.i.h.kyoto-u.ac.jp/users/tsuiki/imaginarycube-e.html) on the subject, figuring out what shapes work and how they could be rotated to work, until eventually deciding to make my own visualizer for the same.

## ✨ Key Features

- GUI to extensively control all aspects of the cube fractal
- Fractal size and interation control
- Shape rotation with speed control to view the shadows formed
- Camera rotation to explore the fractals from different perspective
- Latin square depth visualization to view underlying fractal latin square
- Scene reset support in case you tread too far
- Shape randomization support for inspiration
- Pause screen with keyboard support in case you want to take a break
- Experimental **_β_** shapes to try out the non-obvious imaginary cubes

## 💻 Tech Stack

- React-Typescript vite application with Tailwind CSS for styling
- Leverages React Three Fiber and Drei for 3D rendering and scene controls
- Utilizes Leva GUI for adding the imaginary cube fractal controls

## 🧑‍💻 Getting Started

1. Install the dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Navigate to the server (defaults to http://localhost:5173)
