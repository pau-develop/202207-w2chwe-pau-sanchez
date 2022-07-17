import Grid from "./Grid/Grid.js";
import {
  generateScreenElements,
  passValuesToHtmlGrid,
  timer,
  generations,
} from "./screenElements/screenElements.js";

let endOfLife = false;
let cycles = 0;

const testGrid = new Grid(100, 100);

const htmlGrid = generateScreenElements(testGrid);

testGrid.spawnBacteria(5000);

const endGame = function () {
  console.log("End of the game ಥ_ಥ");
};

async function gameLoop() {
  setTimeout(function () {
    testGrid.iterateOverGrid();
    testGrid.passValuesFromNextGenGridToCurrentGrid();
    passValuesToHtmlGrid(testGrid, htmlGrid);
    endOfLife = testGrid.checkForRemainingBacteria();
    cycles++;
    if (cycles >= generations || endOfLife) endGame();
    else gameLoop();
  }, timer);
}

gameLoop();
