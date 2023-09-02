import { generateCubeGrid, generateCubePositions } from "./CubeGrid";
import { generateLatinSquare } from "./LatinSquare";

const generateFractalLatinSquare = (size: number, iteration = 0) => {
  let lsquare = generateLatinSquare(size);
  let prev: number[][] = [];
  while (iteration--) {
    prev = lsquare;
    const size = prev.length;
    const newSize = size * size;
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
  return generateCubeGrid(Math.pow(size, iteration + 1));
};

const generateFractalCubePositions = (size: number, iteration = 0) => {
  return generateCubePositions(Math.pow(size, iteration + 1));
};

export {
  generateFractalCubeGrid,
  generateFractalCubePositions,
  generateFractalLatinSquare,
};
