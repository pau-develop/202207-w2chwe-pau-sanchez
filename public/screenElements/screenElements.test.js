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
