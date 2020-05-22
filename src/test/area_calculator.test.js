/*global test, expect*/

const calculate_triangle_area_by_herons_formula = require("../main/area_calculator");

test("return correctly calculated area for triangle", () => {
  expect(calculate_triangle_area_by_herons_formula(5, 6, 7)).toBeCloseTo(
    14.696,
    2
  );
});
