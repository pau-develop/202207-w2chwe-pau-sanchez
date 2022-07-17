import Grid from "./Grid/Grid.js";
import {
  generateScreenElements,
  passValuesToHtmlGrid,
} from "./screenElements/screenElements.js";

let endOfLife = false;
let generations = 0;
let timer = 100;

const testGrid = new Grid(50, 50);
console.table(testGrid.gameGrid);

const htmlGrid = generateScreenElements(testGrid);

testGrid.spawnBacteria(300);
console.table(testGrid.gameGrid);

const endGame = function () {
  console.log("End of the game ಥ_ಥ");
};

async function gameLoop() {
  return new Promise(() => {
    setTimeout(function () {
      testGrid.iterateOverGrid();
      passValuesToHtmlGrid(testGrid, htmlGrid);
      console.table(testGrid.gameGrid);
      endOfLife = testGrid.checkForRemainingBacteria();
      generations++;
      if (generations >= 300 || endOfLife) endGame();
      else gameLoop();
    }, timer);
  });
}

gameLoop();
