const getFormattedTodayDate = require('../main/datetime')

test('returns dd/MM/yyyy format', () => {

    expect(getFormattedTodayDate()).toBe("21/05/2020");

})
