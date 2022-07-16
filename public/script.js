import Grid from "./Grid/Grid.js";

const testGrid = new Grid(9, 9);

console.table(testGrid.gameGrid);

testGrid.spawnBacteria(40);

console.table(testGrid.gameGrid);

testGrid.iterateOverGrid();

console.table(testGrid.nextGenGrid);
