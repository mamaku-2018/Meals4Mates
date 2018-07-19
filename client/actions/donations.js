import request from 'superagent'
import {showSuccess, showError} from '.'

export function submitDonation (donation, id) {
  return (dispatch) => {
    return request
      .post(`/api/v1/balance/${id}/donate`)
      .send({donation})
      .then(() => {
        dispatch(showSuccess('Donation has been submitted'))
      })
      .catch(() => {
        dispatch(showError('Could not submit the donation'))
      })
  }
}
