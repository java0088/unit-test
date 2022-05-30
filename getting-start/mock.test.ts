
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test('test mock', () => {
  const mockCallback = jest.fn(x => x + 42)

  forEach([0, 1], mockCallback)

  expect(mockCallback.mock.calls[0][0]).toBe(0)

  expect(mockCallback.mock.results[0].value).toBe(42)
  console.log(mockCallback.mock)
})

