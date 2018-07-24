import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { connect } from 'react-redux'
import { getStoreStats } from '../actions/storeStats'

class StoreStats extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      donation: [],
      redemption: [],
      summedUpDates: [],
      transactions: []
    }
    this.getTransactions = this.getTransactions.bind(this)
    this.isDonationDateSummedUp = this.isDonationDateSummedUp.bind(this)
    this.sumUpDonationDate = this.sumUpDonationDate.bind(this)
  }

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.dispatch(getStoreStats(id))
  }

  isDonationDateSummedUp (date) {
    return this.state.summedUpDates.indexOf(date.substring(0, 7)) !== -1
  }

  sumUpDonationDate (date) {
    let dates = this.state.summedUpDates
    let donations = this.state.donation
    let redemptions = this.state.redemption
    let donationSum = 0
    let redemptionSum = 0

    this.props.storeStats.forEach(t => {
      if (t.date.substring(0, 7) === date.substring(0, 7)) {
        donationSum += Number(t.donation)
        redemptionSum += Number(t.redemption)
      }
    })

    dates.push(date.substring(0, 7))
    donations.push(donationSum)
    redemptions.push(redemptionSum)
    this.setState = ({
      donation: donations,
      redemption: redemptions,
      summedUpDates: dates
    })
  }

  getTransactions () {
    this.props.storeStats.forEach(t => {
      if (!this.isDonationDateSummedUp(t.date)) {
        this.sumUpDonationDate(t.date)
      }
    })

    let obj = {}
    this.state.summedUpDates.forEach((d, i) => {
      obj[i] = {
        date: d,
        donation: this.state.donation[i],
        redemption: this.state.redemption[i]}
    })
    const transactions = Object.values(obj)
    return transactions
  }

  render () {
    if (!this.props.storeStats) return null
    const trxs = this.getTransactions()
    return (
      <div className='stats'>
        <h3>Donations by Month</h3>
        {this.props.storeStats &&
          <ResponsiveContainer width='100%' height={500} maxWidth={600}>
            <BarChart data={trxs} margin={{ top: 5, right: 25, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray='4 4' />
              <XAxis dataKey="date" label={{ value: 'Month', fill: '#1a2930', offset: -10, position: 'insideBottom' }} />
              <YAxis label={{ value: 'Amount ($)', angle: -90, position: 'center', padding: 10, fill: '#1a2930' }} />
              <Tooltip offset={20} />
              <Legend align='right' verticalAlign='bottom' height={80} width={200} left={20} />
              <Bar dataKey="donation" fill='#F7CE3E' legendType="square" barSize={40} />
              <Bar dataKey="redemption" fill='#8e9b9f' legendType="square" barSize={40} />
            </BarChart>
          </ResponsiveContainer>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    storeStats: state.storeStats
  }
}

export default connect(mapStateToProps)(StoreStats)
