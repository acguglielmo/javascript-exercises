/*global test, expect*/

const rotate = require("../main/rotate_string");

test("returns rotated string 0 times", () => {
  expect(rotate("w3resource", 0)).toBe("w3resource");
});

test("returns rotated string 1 times", () => {
  expect(rotate("w3resource", 1)).toBe("ew3resourc");
});
