let timer = 20;
let generations = 1000;

const generateScreenElements = function (grid) {
  const gridElement = document.querySelector(".grid");
  const gridElementSize = gridElement.getBoundingClientRect();
  const cellWidth = gridElementSize.width / grid.columns;
  const cellHeight = gridElementSize.height / grid.rows;
  const htmlGrid = [];
  for (let x = 0; x < grid.rows; x++) {
    const rowContainer = document.createElement("div");
    rowContainer.style.height = cellHeight - 4 + "px";
    rowContainer.style.width = "100%";
    rowContainer.style = "display:flex";
    gridElement.appendChild(rowContainer);
    htmlGrid[x] = [];
    for (let y = 0; y < grid.columns; y++) {
      const columnContainer = document.createElement("div");
      columnContainer.style.height = cellHeight - 4 + "px";
      columnContainer.style.width = cellWidth - 4 + "px";
      rowContainer.appendChild(columnContainer);
      htmlGrid[x][y] = columnContainer;
    }
  }
  return htmlGrid;
};

const passValuesToHtmlGrid = function (grid, htmlGrid) {
  for (let x = 0; x < grid.rows; x++) {
    for (let y = 0; y < grid.columns; y++) {
      if (grid.gameGrid[x][y] === 1)
        htmlGrid[x][y].style.backgroundColor = "yellow";
      else htmlGrid[x][y].style.backgroundColor = "black";
    }
  }
};

const buttonMinusSpeed = document.querySelector(".button-wrap__minus");
const buttonPlusSpeed = document.querySelector(".button-wrap__plus");
const buttonMinusGenerations = document.querySelector(".button-wrap__minusG");
const buttonPlusGenerations = document.querySelector(".button-wrap__plusG");
const percentElement = document.querySelector(".button-wrap__percent");
const generationsElement = document.querySelector(".button-wrap__generations");
generationsElement.textContent = generations;

buttonMinusSpeed.addEventListener("click", () => {
  timer += 20;
  if (timer > 380) timer = 380;
  updateSpeedPercentNumber(timer);
  return timer;
});

buttonPlusSpeed.addEventListener("click", () => {
  timer -= 20;
  if (timer < 0) timer = 0;
  updateSpeedPercentNumber(timer);
  return timer;
});

buttonMinusGenerations.addEventListener("click", () => {
  generations -= 100;
  if (generations < 0) generations = 0;
  updateGenerationsNumber(generations);
  return generations;
});

buttonPlusGenerations.addEventListener("click", () => {
  generations += 100;
  updateGenerationsNumber(generations);
  return generations;
});

const updateSpeedPercentNumber = function (timer) {
  const maxPercent = 400;
  const percent = parseInt((timer / maxPercent) * 100);
  const inversePercent = (timer / 4) * -1 + maxPercent / 2 / 2;
  percentElement.textContent = inversePercent + "%";
};

const updateGenerationsNumber = function (generations) {
  generationsElement.textContent = generations;
};
export { generateScreenElements, passValuesToHtmlGrid, timer, generations };
