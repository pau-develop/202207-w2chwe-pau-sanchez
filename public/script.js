import Grid from "./Grid/Grid.js";
import {
  generateScreenElements,
  passValuesToHtmlGrid,
} from "./screenElements/screenElements.js";

let endOfLife = false;
let generations = 0;
let timer = 25;

const testGrid = new Grid(100, 100);

const htmlGrid = generateScreenElements(testGrid);

testGrid.spawnBacteria(500);

const endGame = function () {
  console.log("End of the game ಥ_ಥ");
};

async function gameLoop() {
  return new Promise(() => {
    setTimeout(function () {
      testGrid.iterateOverGrid();
      passValuesToHtmlGrid(testGrid, htmlGrid);
      endOfLife = testGrid.checkForRemainingBacteria();
      generations++;
      if (generations >= 1000 || endOfLife) endGame();
      else gameLoop();
    }, timer);
  });
}

gameLoop();
