import Grid from "./Grid/Grid.js";

let endOfLife = false;
let generations = 0;
let timer = 500;

const testGrid = new Grid(10, 20);
console.table(testGrid.gameGrid);
testGrid.spawnBacteria(15);
console.table(testGrid.gameGrid);

const endGame = function () {
  console.log("End of the game ಥ_ಥ");
};

async function gameLoop() {
  return new Promise(() => {
    setTimeout(function () {
      testGrid.iterateOverGrid();
      console.table(testGrid.gameGrid);
      endOfLife = testGrid.checkForRemainingBacteria();
      generations++;
      if (generations >= 50 || endOfLife) endGame();
      else gameLoop();
    }, timer);
  });
}

gameLoop();
