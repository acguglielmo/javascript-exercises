/*global test, expect*/

const rotate = require("../main/rotate_string");

test("returns rotated string 0 times", () => {
  expect(rotate("w3resource", 0)).toBe("w3resource");
});

test("returns rotated string 1 time", () => {
  expect(rotate("w3resource", 1)).toBe("ew3resourc");
});

test("returns rotated string 2 times", () => {
  expect(rotate("w3resource", 2)).toBe("cew3resour");
});

test("returns rotated string 1 time 2 times sequentially", () => {
  expect(rotate(rotate("w3resource", 1), 1)).toBe("cew3resour");
});
