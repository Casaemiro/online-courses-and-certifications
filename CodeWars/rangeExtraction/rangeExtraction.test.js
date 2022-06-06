

const rangeExtraction = require('./rangeExtraction');

test('adds 1 + 2 to equal 3', () => {
  expect(rangeExtraction.solution).toBe(['-10--8','-6','-3-1','3-5','7-11','14','15','17-20']);
});