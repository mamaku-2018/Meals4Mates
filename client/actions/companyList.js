import request from 'superagent'
import {showError} from './'

export const REQUEST_LIST_STATS = 'REQUEST_LIST_STATS'
export const RECEIVE_LIST_STATS = 'RECEIVE_LIST_STATS'

export const requestStats = () => {
  return {
    type: REQUEST_LIST_STATS
  }
}

export const receiveStats = (stats) => {
  return {
    type: RECEIVE_LIST_STATS,
    stats
  }
}

export function getAllStoreStats () {
  return dispatch => {
    dispatch(requestStats())
    return request
      .get('/api/v1/balance/admin/stats')
      .then(stats => {
        dispatch(receiveStats(stats.body))
      })
      .catch(() => {
        dispatch(showError('Could not retrieve stats'))
      })
  }
}
