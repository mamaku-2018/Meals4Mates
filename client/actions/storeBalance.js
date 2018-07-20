import request from 'superagent'
export const RECEIVE_BALANCE = 'RECEIVE_BALANCE'

export const receiveBalance = (balance) => {
  return {
    type: RECEIVE_BALANCE,
    balance
  }
}

export function getStoreBalance (id) {
  return dispatch => {
    return request('get', `/api/v1/balance/${id}`)
      .then(res => {
        dispatch(receiveBalance(res))
      })
  }
}
