import request from 'superagent'
import {showError} from './'
import {getTransactions} from './storeStats'

export const REQUEST_ADMIN_STATS = 'REQUEST_ADMIN_STATS'
export const RECEIVE_ADMIN_STATS = 'RECEIVE_ADMIN_STATS'

const requestAdminStats = () => {
  return {
    type: REQUEST_ADMIN_STATS
  }
}

const receiveAdminStats = (stats) => {
  return {
    type: RECEIVE_ADMIN_STATS,
    stats
  }
}

export function getAdminStats () {
  return dispatch => {
    dispatch(requestAdminStats())
    return request
      .get('/api/v1/store/donationRedemption')
      .then(res => {
        return getTransactions(res.body)
      })
      .then(stats => {
        dispatch(receiveAdminStats(stats))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}
