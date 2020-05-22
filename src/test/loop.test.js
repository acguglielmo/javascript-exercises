/*global test, expect*/

const loop = require("../main/loop");

test("returns correct value for sum using loop", () => {
  expect(loop(5).reduce((total, value) => total + value, 0)).toBe(10);
});
