import request from 'superagent'

export const REQUEST_TOTAL_STATS = 'REQUEST_TOTAL_STATS'
export const RECEIVE_TOTAL_STATS = 'RECEIVE_TOTAL_STATS'

export const requestUserRegistration = () => {
  return {
    type: REQUEST_TOTAL_STATS
  }
}

export const receiveTotalStats = () => {
  return {
    type: RECEIVE_TOTAL_STATS
  }
}

export function getTotalStats () {
  return (dispatch) => {
    request('get', `/auth/${id}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body))
        dispatch(clearError)
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

