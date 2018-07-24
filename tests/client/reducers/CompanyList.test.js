import {
  REQUEST_LIST_STATS,
  RECEIVE_LIST_STATS,
  receiveStats,
  requestStats
} from '../../../client/actions/companyList'

const testStat = {
  something: 'something'
}

test('requestStats returns the correct type', () => {
  const currentState = testStat
  const action = {
    type: REQUEST_LIST_STATS
  }
  const newState = requestStats(currentState, action)
  expect(newState).toEqual({'type': 'REQUEST_LIST_STATS'})
})

test('companyList returns false during RECEIVE_LIST_STATS', () => {
  const currentState = null
  const stats = ''
  const action = {
    type: RECEIVE_LIST_STATS,
    stats
  }
  const newState = receiveStats(currentState, action)
  expect(newState).toEqual({stats: null, 'type': 'RECEIVE_LIST_STATS'})
})
