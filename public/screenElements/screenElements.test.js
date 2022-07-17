describe("Given a decreaseSpeed function", () => {
  describe("When the function is triggered by pressing a button it should decrease the value of the global variable 'timer' by 20 as long as its not < 0, if its < 0 it should change the value of timer to 0 and then return it", () => {
    test("testing the function with a value of 19 it should return 0", () => {
      let timer = 19;
      const mockDecreaseSpeed = function () {
        timer -= 20;
        if (timer < 0) timer = 0;
        return timer;
      };

      const expectedReturn = 0;
      const actualReturn = mockDecreaseSpeed();

      expect(actualReturn).toEqual(expectedReturn);
    });
    test("testing the function with a value of 40 it should return 20", () => {
      let timer = 40;
      const mockDecreaseSpeed = function () {
        timer -= 20;
        if (timer < 0) timer = 0;
        return timer;
      };

      const expectedReturn = 20;
      const actualReturn = mockDecreaseSpeed();

      expect(actualReturn).toEqual(expectedReturn);
    });
  });
});

describe("Given a increaseSpeed function", () => {
  describe("When the function is triggered by pressing a button it should increase the value of the global variable 'timer' by 20 as long as its not > 400, if its > 400 it should change the value of timer to 400 and then return it", () => {
    test("testing the function with a value of 385 it should return 400", () => {
      let timer = 385;
      const mockIncreaseSpeed = function () {
        timer += 20;
        if (timer > 400) timer = 400;
        return timer;
      };

      const expectedReturn = 400;
      const actualReturn = mockIncreaseSpeed();

      expect(actualReturn).toEqual(expectedReturn);
    });
    test("testing the function with a value of 40 it should return 60", () => {
      let timer = 40;
      const mockIncreaseSpeed = function () {
        timer += 20;
        if (timer > 400) timer = 400;
        return timer;
      };

      const expectedReturn = 60;
      const actualReturn = mockIncreaseSpeed();

      expect(actualReturn).toEqual(expectedReturn);
    });
  });
});

describe("Given a function passValuesToHtmlGrid that takes an instance of grid class and an html grid", () => {
  describe("It should iterate over the grid.gameGrid...", () => {
    test("If the value of gameGrid is 0 it should change the html grid background color to black and if the value is 1 it should change the background color to yellow", () => {
      const rows = 3;
      const cols = 3;
      const exampleGrid = [
        [1, 1, 1],
        [0, 0, 1],
        [1, 0, 0],
      ];
      const expectedHtmlGridOutcome = [
        ["yellow", "yellow", "yellow"],
        ["black", "black", "yellow"],
        ["yellow", "black", "black"],
      ];
      const htmlGrid = [
        [, ,],
        [, ,],
        [, ,],
      ];
      for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
          if (exampleGrid[x][y] === 0) htmlGrid[x][y] = "black";
          else if (exampleGrid[x][y] === 1) htmlGrid[x][y] = "yellow";
        }
      }
      expect(htmlGrid).toEqual(expectedHtmlGridOutcome);
    });
  });
});
