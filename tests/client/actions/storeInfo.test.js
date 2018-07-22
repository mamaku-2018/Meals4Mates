import {getStoreInfo} from '../../../client/actions/getStoreInfo'
import {REQUEST_USER_DETAILS} from '../../../client/actions/auth/register'

jest.mock('superagent', () => {
  return {
    get: (url) => {
      return Promise.resolve({body: {name: 15}})
    }
  }
})

test('getStoreInfo gets the correct actions', () => {
  const dispatch = jest.fn()
  const id = 1
  return getStoreInfo(id)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_USER_DETAILS)
    })
})
