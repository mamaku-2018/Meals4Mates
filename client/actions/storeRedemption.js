import request from 'superagent'
import {showError, showSuccess} from './'

export function submitVoucher (voucher) {
  return (dispatch) => {
    return request
      .post(`/api/v1/balance/${voucher.store_id}/redeem`)
      .send(voucher)
      .then(() => {
        dispatch(showSuccess('Voucher has been redeemed'))
      })
      .catch(() => {
        dispatch(showError('Could not redeem voucher'))
      })
  }
}
