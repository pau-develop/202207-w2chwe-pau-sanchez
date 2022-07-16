import Grid from "./Grid.js";
import spawnBacteria from "./Grid.js";
import checkNeigboringCells from "./Grid.js";

describe("Given a Grid class", () => {
  describe("When an instance of the class is created with a number of rows and columns as arguments", () => {
    test("It should return an Instance of the object with a rows prop with a value of 2, a columns prop with a value of 2 and a 2D Object array with the given number of rows and columns filled with the number 0", () => {
      const rows = 2;
      const cols = 2;
      const expectedReturn = {
        rows: 2,
        columns: 2,
        population: undefined,
        gameGrid: [
          [0, 0],
          [0, 0],
        ],
        nextGenGrid: [
          [0, 0],
          [0, 0],
        ],
      };

      const actualReturn = new Grid(2, 2);

      expect(actualReturn).toEqual(expectedReturn);
    });
  });
});

describe("Given a Grid class method called spawnBacteria that accepts a number named population as arguments", () => {
  describe("When the method is called with a population argument of 1", () => {
    test("It should randomly take one of the rows array index and one of the columns array index and change the 0 for a 1", () => {
      const population = 1;
      const randomX = 1;
      const randomY = 1;
      const testGrid = {
        rows: 2,
        columns: 2,
        gameGrid: [
          [0, 0],
          [0, 0],
        ],
      };
      const expectedOutcome = {
        rows: 2,
        columns: 2,
        gameGrid: [
          [0, 0],
          [0, 1],
        ],
      };
      for (let i = 0; i < population; i++) {
        const randomXTest = 1;
        const randomYTest = 1;
        if (testGrid.gameGrid[randomXTest][randomYTest] === 1) i--;
        else testGrid.gameGrid[randomXTest][randomYTest] = 1;
      }

      expect(testGrid).toEqual(expectedOutcome);
    });
  });

  describe("When the method is called with a population argument of 3, and this number surpasses the total number of array indexes in gameGrid divided by two", () => {
    test("It should throw a string error", () => {
      const population = 3;
      const testGrid = new Grid(2, 2);
      expect(() => {
        testGrid.spawnBacteria(population);
      }).toThrow(
        "Population can never exceed half of the cells available on the grid!"
      );
    });
  });
});

describe("Given a checkNeighboringCell method of Grid class that takes a row Number and a column Number as arguments", () => {
  describe("When the method is called it should pass the row and column arguments as indexes to the 2D array gameGrid that belongs to the same class and check the context of the neighboring indexes, it should return true or false according to The Game of Life rules", () => {
    const exampleGrid = [
      [1, 1, 1],
      [0, 0, 1],
      [1, 0, 0],
    ];
    const testGrid = new Grid(3, 3);
    testGrid.gameGrid = exampleGrid;
    test("When checking the top row of testGrid it should skip any row on top of that, since it would return undefined, check on the rest of neighboring cells and return true or false according to the Game of Life rules", () => {
      const row = 0;
      const column = 1;
      const expectedReturn = false;

      const actualReturn = testGrid.checkNeigboringCells(row, column);

      expect(actualReturn).toEqual(expectedReturn);
    });
    test("When checking the bottom row of testGrid it should skip any row on top of that, since it would return undefined, check on the rest of neighboring cells and return true or false according to the Game of Life rules", () => {
      const row = 2;
      const column = 1;
      const expectedReturn = false;

      const actualReturn = testGrid.checkNeigboringCells(row, column);

      expect(actualReturn).toEqual(expectedReturn);
    });
    test("When checking the left column of testGrid it should skip any column to the left of it, since it would return undefined, check on the rest of neighboring cells and return true or false according to the Game of Life rules", () => {
      const row = 1;
      const column = 0;
      const expectedReturn = false;

      const actualReturn = testGrid.checkNeigboringCells(row, column);

      expect(actualReturn).toEqual(expectedReturn);
    });
    test("When checking the right column of testGrid it should skip any column to the right of it, since it would return undefined, check on the rest of neighboring cells and return true or false according to the Game of Life rules", () => {
      const row = 1;
      const column = 2;
      const expectedReturn = false;

      const actualReturn = testGrid.checkNeigboringCells(row, column);

      expect(actualReturn).toEqual(expectedReturn);
    });
  });
});
