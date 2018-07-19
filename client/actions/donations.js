import request from '../lib/apiClient'
import {showSuccess, showError} from '.'

export function submitDonation (donation, id) {
  return dispatch => {
    return request('post', `/balance/${id}/donate`, donation)
      .then(() => {
        dispatch(showSuccess('Donation has been submitted'))
      })
      .catch(() => {
        dispatch(showError('Could not submit the donation'))
      })
  }
}
