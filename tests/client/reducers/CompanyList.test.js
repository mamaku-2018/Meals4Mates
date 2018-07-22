import {
  REQUEST_LIST_STATS,
  RECEIVE_LIST_STATS,
  getStoreBalance
} from '../../../client/actions/companyList'

test('companyList returns true during REQUEST_LIST_STATS', () => {
  const currentState = null
  const action = {
    type: REQUEST_LIST_STATS
  }
  const newState = getStoreBalance(currentState, action)
  expect(newState).toBe(null)
})

test('companyList returns false during RECEIVE_LIST_STATS', () => {
  const currentState = null
  const action = {
    type: RECEIVE_LIST_STATS,
    stats
  }
  const newState = getStoreBalance(currentState, action)
  expect(newState).toBe(stats)
})