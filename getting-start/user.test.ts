// jest.mock('../__mocks__/request.ts')

import * as user from '../__mocks__/user'

it('works with promise', () => {
  expect.assertions(1)
  return user.getUserName(4).then(name => expect(name).toBe('Mark'))
})