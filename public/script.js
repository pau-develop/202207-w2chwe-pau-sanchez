import Grid from "./Grid/Grid.js";

let endOfLife = false;
let generation = 0;

const testGrid = new Grid(10, 20);
console.table(testGrid.gameGrid);
testGrid.spawnBacteria(40);
console.table(testGrid.gameGrid);

const endGame = function () {
  console.log("End of the game ಥ_ಥ");
};

const gameLoop = function () {
  testGrid.iterateOverGrid();
  console.table(testGrid.gameGrid);
  endOfLife = testGrid.checkForRemainingBacteria();
  generation++;
  if (generation >= 10 || endOfLife) endGame();
  else gameLoop();
};

gameLoop();
