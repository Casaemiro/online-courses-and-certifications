
const parseInt = require('./parseIntString');

test('one should equal 1', () => {
  expect(parseInt("one")).toBe(1);
});
test('one should equal 1', () => {
  expect(parseInt("two")).toBe(2);
});
test('one should equal 1', () => {
  expect(parseInt("three")).toBe(3);
});
test('one should equal 1', () => {
  expect(parseInt("four")).toBe(4);
});
test('one should equal 1', () => {
  expect(parseInt("one thousand two hundred and fifty-five")).toBe(1255);
});