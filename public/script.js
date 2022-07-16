import Grid from "./Grid/Grid.js";

const testGrid = new Grid(3, 3);

console.table(testGrid.gameGrid);

testGrid.spawnBacteria(2);

console.table(testGrid.gameGrid);

testGrid.iterateOverGrid();

console.table(testGrid.nextGenGrid);
