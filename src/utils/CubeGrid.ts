import { Vector3 } from "three";
import { CubeGrid, CubePositions } from "../types";

const shouldFill = (pos: Vector3, grid: CubeGrid) => {
  const size = grid.length;
  const half = (size - 1) / 2;

  const x = pos.x + half;
  const y = pos.y + half;
  const z = pos.z + half;

  return (
    x >= 0 &&
    x < size &&
    y >= 0 &&
    y < size &&
    z >= 0 &&
    z < size &&
    grid[x][y][z]
  );
};

const generateCubeGrid = (size = 3) => {
  const cubeGrid: CubeGrid = [];

  for (let x = 0; x < size; ++x) {
    cubeGrid[x] = [];
    for (let y = 0; y < size; ++y) {
      cubeGrid[x][y] = [];
      for (let z = 0; z < size; ++z) {
        cubeGrid[x][y][z] = false;
      }
    }
  }

  return cubeGrid;
};

const generateCubePositions = (size = 3) => {
  const positions: CubePositions = [];
  const half = (size - 1) / 2;

  for (let x = -half; x <= half; ++x) {
    for (let y = -half; y <= half; ++y) {
      for (let z = -half; z <= half; ++z) {
        positions.push(new Vector3(x, y, z));
      }
    }
  }

  return positions;
};

export { generateCubeGrid, generateCubePositions, shouldFill };
