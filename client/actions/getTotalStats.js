import request from 'superagent'
import {showError} from '../'

export const REQUEST_TOTAL_STATS = 'REQUEST_TOTAL_STATS'
export const RECEIVE_TOTAL_STATS = 'RECEIVE_TOTAL_STATS'

export const requestUserRegistration = () => {
  return {
    type: REQUEST_TOTAL_STATS
  }
}

export const receiveTotalStats = (stats) => {
  return {
    type: RECEIVE_TOTAL_STATS,
    stats
  }
}

export function getTotalStats () {
  return (dispatch) => {
    request
      .get('/api/v1/balance/admin')
      .then(stats => {
        dispatch(receiveTotalStats(stats.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}
