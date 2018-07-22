import request from 'superagent'
import {showError} from './'

export const REQUEST_STATS = 'REQUEST_STATS'
export const RECEIVE_STATS = 'RECEIVE_STATS'

export const requestStoreStats = () => {
  return {
    type: REQUEST_STATS
  }
}

export const receiveStoreStats = (balance) => {
  return {
    type: RECEIVE_STATS,
    balance
  }
}

export function getStoreStats (id) {
  return dispatch => {
    dispatch(requestStoreStats())
    return request
      .get(`/api/v1/balance/${id}`)
      .then(res => {
        dispatch(receiveStoreStats(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}
