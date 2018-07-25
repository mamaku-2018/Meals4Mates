import request from 'superagent'
import {showError} from './'

export const REQUEST_STATS = 'REQUEST_STATS'
export const RECEIVE_STATS = 'RECEIVE_STATS'

const requestStoreStats = () => {
  return {
    type: REQUEST_STATS
  }
}

const receiveStoreStats = (balance) => {
  return {
    type: RECEIVE_STATS,
    balance
  }
}

export function getStoreStats (id) {
  return dispatch => {
    dispatch(requestStoreStats())
    return request
      .get(`/api/v1/store/${id}/donationRedemption`)
      .then(res => {
        return getTransactions(res.body)
      })
      .then(stats => {
        dispatch(receiveStoreStats(stats))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

let dates = []
let donations = []
let redemptions = []

function isTransactionDateSummedUp (date) {
  return dates.indexOf(date.substring(0, 7)) !== -1
}

function sumUpTransactionDate (date, stats) {
  let donationSum = 0
  let redemptionSum = 0

  stats.forEach(t => {
    if (t.date.substring(0, 7) === date.substring(0, 7)) {
      donationSum += Number(t.donation)
      redemptionSum += Number(t.redemption)
    }
  })

  dates.push(date.substring(0, 7))
  donations.push(donationSum)
  redemptions.push(redemptionSum)
}

export function getTransactions (stats) {
  stats.forEach(t => {
    if (!isTransactionDateSummedUp(t.date)) {
      sumUpTransactionDate(t.date, stats)
    }
  })

  let obj = {}
  dates.forEach((d, i) => {
    obj[i] = {
      date: d,
      donation: donations[i],
      redemption: redemptions[i]
    }
  })
  const transactions = Object.values(obj)
  return transactions
}
