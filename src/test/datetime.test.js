/*global test, expect*/

const getFormattedDate = require("../main/datetime");

test("returns dd/MM/yyyy format", () => {
  expect(getFormattedDate("05-21-2020")).toBe("21/05/2020");
});
