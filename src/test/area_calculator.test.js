const calculate_triangle_area = require('../main/area_calculator')

test('return correctly calculated area for triangle', () => {

    expect( calculate_triangle_area(5, 6, 7) ).toBeCloseTo(14.696, 2);

})
