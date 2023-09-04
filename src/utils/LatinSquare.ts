import { CubeGrid, LatinSquare } from "../types";

const generateLatinSquare = (size = 3, empty = false) => {
  const lsquare: LatinSquare = new Array(size)
    .fill(null)
    .map(() => new Array(size).fill(-1));

  if (empty) {
    return lsquare;
  }

  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      lsquare[i][j] = (i + j) % size;
    }
  }

  return lsquare;
};

const populateCubeGrid = (grid: CubeGrid, lsquare: LatinSquare) => {
  const size = lsquare.length;
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      grid[i][j][lsquare[i][j]] = true;
    }
  }
};

export { generateLatinSquare, populateCubeGrid };
