import { LatinSquare } from "../components/types";
import { generateCubeGrid, generateCubePositions } from "./CubeGrid";
import { generateLatinSquare } from "./LatinSquare";

const generateFractalLatinSquare = (size: number, iteration = 0) => {
  let lsquare = generateLatinSquare(size);
  let prev: LatinSquare = [];
  while (iteration--) {
    prev = lsquare;
    const size = prev.length;
    const newSize = Math.pow(size, 2);
    lsquare = generateLatinSquare(newSize, true);
    for (let i = 0; i < size; ++i) {
      for (let j = 0; j < size; ++j) {
        const offset = prev[i][j] * size;
        for (let r = 0; r < size; ++r) {
          for (let c = 0; c < size; ++c) {
            lsquare[r + i * size][c + j * size] = offset + prev[r][c];
          }
        }
      }
    }
  }

  return lsquare;
};

const generateFractalCubeGrid = (size: number, iteration = 0) => {
  return generateCubeGrid(Math.pow(size, Math.pow(2, iteration)));
};

const generateFractalCubePositions = (size: number, iteration = 0) => {
  return generateCubePositions(Math.pow(size, Math.pow(2, iteration)));
};

export {
  generateFractalCubeGrid,
  generateFractalCubePositions,
  generateFractalLatinSquare,
};
