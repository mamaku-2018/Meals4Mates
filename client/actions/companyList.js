import request from 'superagent'
import {showError} from './'

export const requestStats() {
  return {
    type: REQUEST_STATS
  }
}

export const receiveStats(voucher)

export function getAllStoreStats() {
  return dispatch => {
    dispatch(requestStats())
    return request 
      .get('/api/v1/')
      .then(stats => {
        dispatch(receiveStats(stats.body))
      })
      .catch(() => {
        dispatch(showError('Could not retrieve stats'))
      })
  }
}