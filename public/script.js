import Grid from "./Grid/Grid.js";

const testGrid = new Grid(5, 5);

console.table(testGrid.gameGrid);

testGrid.spawnBacteria(10);

console.table(testGrid.gameGrid);
