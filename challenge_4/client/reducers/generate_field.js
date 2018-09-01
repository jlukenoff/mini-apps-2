const generateRandomCoordinates = max => [Math.floor(Math.random() * max), Math.floor(Math.random() * max)];

const generateMatrix = (size) => {
  const output = [];
  for (let i = 0; i < size; i++) {
    const subArr = [];
    for (let j = 0; j < size; j++) {
      subArr.push(0);
    }
    output.push(subArr);
  }
  return output;
};

const incrementSurrounding = (row, col, matrix) => {
  const surrounding = [[row - 1, col], [row - 1, col + 1], [row, col + 1], [row + 1, col + 1], [row + 1, col], [row + 1, col - 1], [row, col - 1], [row - 1, col - 1]];
  for (let i = 0; i < surrounding.length; i++) {
    if (matrix[surrounding[i][0]] !== undefined
      && matrix[surrounding[i][0]][surrounding[i][1]] !== undefined
      && matrix[surrounding[i][0]][surrounding[i][1]] !== true) {
      matrix[surrounding[i][0]][surrounding[i][1]]++;
    }
  }
  return matrix;
};

const dropMines = (random, matrix) => {
  for (let i = 0; i <= random; i++) {
    const position = generateRandomCoordinates(matrix.length);
    matrix[position[0]][position[1]] = true;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === true) {
        incrementSurrounding(i, j, matrix);
      }
    }
  }
  return matrix;
};

const renderMatrix = (size) => {
  const matrix = generateMatrix(size);
  const random = Math.floor((size ** 2) * 0.3) - Math.ceil(Math.random() * Math.floor((size ** 2) * 0.3));
  return dropMines(random, matrix);
};

export default renderMatrix;
