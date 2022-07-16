import Grid from "./Grid.js";
import spawnBacteria from "./Grid.js";

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
