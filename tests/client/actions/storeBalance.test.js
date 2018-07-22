import {getStoreBalance, REQUEST_BALANCE} from '../../../client/actions/storeBalance'

jest.mock('superagent', () => {
  return {
    get: (url) => {
      return Promise.resolve({body: {donations: 15}})
    }
  }
})

test('getStoreBalance gets the correct actions', () => {
  const dispatch = jest.fn()
  const id = 1
  return getStoreBalance(id)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_BALANCE)
    })
})
