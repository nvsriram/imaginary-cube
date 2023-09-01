const generateCubeGrid = (size = 3): boolean[][][] => {
  const cubeGrid: boolean[][][] = [];

  for (let x = 0; x < size; ++x) {
    cubeGrid[x] = [];
    for (let y = 0; y < size; ++y) {
      cubeGrid[x][y] = [];
      for (let z = 0; z < size; ++z) {
        cubeGrid[x][y][z] = true;
      }
    }
  }

  return cubeGrid;
};

export { generateCubeGrid };
