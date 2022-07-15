class Grid {
  rows;
  columns;
  population;
  gameGrid = [];

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    for (let x = 0; x < rows; x++) {
      this.gameGrid[x] = [];
      for (let y = 0; y < columns; y++) {
        this.gameGrid[x].push(0);
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
}

export default Grid;
