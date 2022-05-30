import { fetchData } from '../src/utils/http'

function testCallback(cb) {
  setTimeout(() => {
    cb(null, 'hello')
  }, 2000)
}

// test promise
test('test promise', () => {
  return fetchData().then(data => {
    expect(data).toBe('hello')
  })
})

// test async await
test('test async and await', async () => {
  const data = await fetchData()
  expect(data).toBe('hello')
})

// test callback
test('test callback', (done) => {
  function callback(error, data) {
    if (error) {
      return
    }
    try {
      expect(data).toBe('hello')
      done()
    } catch (error) {
      done(error)
    }
  }

  testCallback(callback)
})