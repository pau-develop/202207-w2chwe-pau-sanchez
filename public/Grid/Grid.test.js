import Grid from "./Grid.js";

describe("Given a Grid class", () => {
  describe("When an instance of the class is created with a number of rows and columns as arguments", () => {
    test("It should return a 2D Object array with the given number of rows and columns filled with the number 0", () => {
      const rows = 2;
      const cols = 2;
      const expectedReturn = {
        columns: 2,
        gameGrid: [
          [0, 0],
          [0, 0],
        ],
        rows: 2,
      };

      const actualReturn = new Grid(2, 2);

      expect(actualReturn).toEqual(expectedReturn);
    });
  });
});
