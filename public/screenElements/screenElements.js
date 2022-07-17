const generateScreenElements = function (grid) {
  const gridElement = document.querySelector(".main__grid");
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

export { generateScreenElements, passValuesToHtmlGrid };
