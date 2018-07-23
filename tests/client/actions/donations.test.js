import {submitDonation} from '../../../client/actions/donations'
import {SHOW_SUCCESS} from '../../../client/actions'

jest.mock('superagent', () => {
  return {
    post: (url) => {
      return {send: (donation) => {
        return Promise.resolve()
      }
      }
    }
  }
})

test('submitDonations gets the correct actions', () => {
  const dispatch = jest.fn()
  const id = 1
  const donation = 10
  return submitDonation(donation, id)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(SHOW_SUCCESS)
    })
})
