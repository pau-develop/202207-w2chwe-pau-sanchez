class Grid {
  rows;
  columns;
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
}

export default Grid;
