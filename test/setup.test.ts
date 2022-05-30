const cities = []
beforeEach(() => {
  console.log('beforeEach')
  cities.push('北京')
})

afterEach(() => {
  console.log('afterEach')
})

test('test setup', () => {
  expect(cities).toContain('北京')
})
