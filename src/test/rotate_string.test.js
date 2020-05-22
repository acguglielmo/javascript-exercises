/*global test, expect*/

const rotate = require("../main/rotate_string");

test("returns rotated string 0 times", () => {
  expect(rotate("w3resource")).toBe("w3resource");
});
