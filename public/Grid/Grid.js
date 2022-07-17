class Grid {
  rows;
  columns;
  gameGrid = [];
  nextGenGrid = [];
  population;

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    for (let x = 0; x < rows; x++) {
      this.gameGrid[x] = [];
      this.nextGenGrid[x] = [];
      for (let y = 0; y < columns; y++) {
        this.gameGrid[x].push(0);
        this.nextGenGrid[x].push(0);
      }
    }
  }

  spawnBacteria(population) {
    if (population > (this.rows * this.columns) / 2)
      throw "Population can never exceed half of the cells available on the grid!";
    for (let i = 0; i < population; i++) {
      const randomX = Math.floor(Math.random() * this.rows);
      const randomY = Math.floor(Math.random() * this.columns);
      if (this.gameGrid[randomX][randomY] === 1) i--;
      else this.gameGrid[randomX][randomY] = 1;
    }
  }

  iterateOverGrid() {
    let shouldDie = true;
    let aliveNeighbors = 0;
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        aliveNeighbors = this.checkNeighboringBacteria(x, y);
        let currentCell = this.gameGrid[x][y];
        if (
          (currentCell === 1 && aliveNeighbors === 2) ||
          (currentCell === 1 && aliveNeighbors === 3)
        )
          shouldDie = false;
        else if (currentCell === 0 && aliveNeighbors === 3) shouldDie = false;
        else shouldDie = true;

        if (shouldDie) this.nextGenGrid[x][y] = 0;
        else this.nextGenGrid[x][y] = 1;
      }
    }
    this.gameGrid = this.nextGenGrid;
  }

  checkNeighboringBacteria(row, column) {
    let aliveNeighbors = 0;
    //east
    if (column < this.columns - 1) {
      if (this.gameGrid[row][column + 1] === 1) aliveNeighbors++;
    }
    //south-east
    if (row < this.rows - 1 && column < this.columns - 1) {
      if (this.gameGrid[row + 1][column + 1] === 1) aliveNeighbors++;
    }
    //south
    if (row < this.rows - 1) {
      if (this.gameGrid[row + 1][column] === 1) aliveNeighbors++;
    }
    //south-west
    if (row < this.rows - 1 && column - 1 >= 0) {
      if (this.gameGrid[row + 1][column - 1] === 1) aliveNeighbors++;
    }
    //west
    if (column - 1 >= 0) {
      if (this.gameGrid[row][column - 1] === 1) aliveNeighbors++;
    } //north-west
    if (column - 1 >= 0 && row - 1 >= 0) {
      if (this.gameGrid[row - 1][column - 1] === 1) aliveNeighbors++;
    }
    //north
    if (row - 1 >= 0) {
      if (this.gameGrid[row - 1][column] === 1) aliveNeighbors++;
    }
    //north-east
    if (row - 1 >= 0 && column < this.columns - 1) {
      if (this.gameGrid[row - 1][column + 1] === 1) aliveNeighbors++;
    }
    return aliveNeighbors;
  }

  checkForRemainingBacteria() {
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        if (this.gameGrid[x][y] === 1) return false;
      }
    }
    return true;
  }
}

export default Grid;
