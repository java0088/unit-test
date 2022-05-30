import { sum, multiply } from '../src/utils/index'

// test sum
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test multiply

test('multiply 5 to equal 10', () => {
  expect(multiply(5)).toBe(10)
})