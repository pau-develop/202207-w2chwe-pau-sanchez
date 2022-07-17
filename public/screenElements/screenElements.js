let timer = 20;

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

const buttonMinus = document.querySelector(".button-wrap__minus");
const buttonPlus = document.querySelector(".button-wrap__plus");
const buttonSpan = document.querySelector(".button-wrap__span");

buttonMinus.addEventListener("click", () => {
  if (timer < 400) timer += 20;
  else timer = 400;
});

buttonPlus.addEventListener("click", () => {
  if (timer > 0) timer -= 20;
  else timer = 0;
});

export { generateScreenElements, passValuesToHtmlGrid, timer };
