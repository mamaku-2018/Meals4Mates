import request from 'superagent'
import {showError} from './'

export const RECEIVE_BALANCE = 'RECEIVE_BALANCE'
export const REQUEST_BALANCE = 'REQUEST_BALANCE'

export const requestBalance = () => {
  return {
    type: REQUEST_BALANCE
  }
}

export const receiveBalance = (balance) => {
  return {
    type: RECEIVE_BALANCE,
    balance
  }
}

export function getStoreBalance (id) {
  return dispatch => {
    dispatch(requestBalance())
    return request
      .get(`/api/v1/balance/${id}`)
      .then(res => {
        dispatch(receiveBalance(res.body[0]))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}
