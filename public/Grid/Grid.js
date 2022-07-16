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
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        shouldDie = this.checkNeighboringBacteria(x, y);
        if (shouldDie) this.nextGenGrid[x][y] = 0;
        else this.nextGenGrid[x][y] = 1;
      }
    }
    this.gameGrid = this.nextGenGrid;
  }
  checkNeighboringBacteria(row, column) {
    let aliveNeighbor = 0;
    let deadNeighbor = 0;
    //east
    if (column < this.columns - 1) {
      if (this.gameGrid[row][column + 1] === 0) deadNeighbor++;
      else if (this.gameGrid[row][column + 1] === 1) aliveNeighbor++;
    } else deadNeighbor++;
    //south-east
    if (row < this.rows - 1 && column < this.columns - 1) {
      if (this.gameGrid[row + 1][column + 1] === 0) deadNeighbor++;
      else if (this.gameGrid[row + 1][column + 1] === 1) aliveNeighbor++;
    } else deadNeighbor++;
    //south
    if (row < this.rows - 1) {
      if (this.gameGrid[row + 1][column] === 0) deadNeighbor++;
      else if (this.gameGrid[row + 1][column] === 1) aliveNeighbor++;
    } else deadNeighbor++;
    //south-west
    if (row < this.rows - 1 && column - 1 >= 0) {
      if (this.gameGrid[row + 1][column - 1] === 0) deadNeighbor++;
      else if (this.gameGrid[row + 1][column - 1] === 1) aliveNeighbor++;
    } else deadNeighbor++;
    //west
    if (column - 1 >= 0) {
      if (this.gameGrid[row][column - 1] === 0) deadNeighbor++;
      else if (this.gameGrid[row][column - 1] === 1) aliveNeighbor++;
    } else deadNeighbor++;
    //north-west
    if (column - 1 >= 0 && row - 1 >= 0) {
      if (this.gameGrid[row - 1][column - 1] === 0) deadNeighbor++;
      else if (this.gameGrid[row - 1][column - 1] === 1) aliveNeighbor++;
    } else deadNeighbor++;
    //north
    if (row - 1 >= 0) {
      if (this.gameGrid[row - 1][column] === 0) deadNeighbor++;
      else if (this.gameGrid[row - 1][column] === 1) aliveNeighbor++;
    } else deadNeighbor++;
    //north-east
    if (row - 1 >= 0 && column < this.columns - 1) {
      if (this.gameGrid[row - 1][column + 1] === 0) deadNeighbor++;
      else if (this.gameGrid[row - 1][column + 1] === 1) aliveNeighbor++;
    } else deadNeighbor++;
    if (aliveNeighbor < 2 && deadNeighbor !== 3)
      //count neighbors
      return true;
    else if (aliveNeighbor === 2 || aliveNeighbor === 3) return false;
    else if (aliveNeighbor > 3) return true;
    else if (deadNeighbor === 3) return false;
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
