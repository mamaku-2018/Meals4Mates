import {submitVoucher} from '../../../client/actions/storeRedemption'
import {SHOW_SUCCESS} from '../../../client/actions'

jest.mock('superagent', () => {
  return {
    post: (url) => {
      return {send: (voucher) => {
        return Promise.resolve()
      }
      }
    }
  }
})

test('submitVoucher gets the correct actions', () => {
  const dispatch = jest.fn()
  const voucher = {
    store_id: 1,
    voucher: 'xxx',
    redemption: 12
  }
  return submitVoucher(voucher)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_SUCCESS)
    })
})
