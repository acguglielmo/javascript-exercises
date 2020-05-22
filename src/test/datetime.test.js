/*global test, expect*/

const getFormattedDate = require("../main/datetime");

test("returns dd/MM/yyyy format", () => {
  expect(getFormattedDate()).toBe("21/05/2020");
});
