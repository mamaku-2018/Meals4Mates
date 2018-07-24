import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { connect } from 'react-redux'
import { getAdminStats } from '../../actions/adminStats'

class AdminStats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      donations: [],
      redemptions: [],
      summedUpDates: [],
      transactions: []
    }
    this.getTransactions = this.getTransactions.bind(this)
    this.isTransactionDateSummedUp = this.isTransactionDateSummedUp.bind(this)
    this.sumUpTransactionDate = this.sumUpTransactionDate.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(getAdminStats())
  }

  isTransactionDateSummedUp(date) {
    return this.state.summedUpDates.indexOf(date.substring(0, 7)) !== -1
  }

  sumUpTransactionDate(date) {
    let dates = this.state.summedUpDates
    let donation = this.state.donations
    let redemption = this.state.redemptions
    let donationSum = 0
    let redemptionSum = 0

    this.props.adminStats.forEach(t => {
      if (t.date.substring(0, 7) === date.substring(0, 7)) {
        donationSum += Number(t.donation)
        redemptionSum += Number(t.redemption)
      }
    })

    dates.push(date.substring(0, 7))
    donation.push(donationSum)
    redemption.push(redemptionSum)
    this.setState = ({
      donations: donation,
      redemptions: redemption,
      summedUpDates: dates
    })
  }

  getTransactions() {
    this.props.adminStats.forEach(t => {
      if (!this.isTransactionDateSummedUp(t.date)) {
        this.sumUpTransactionDate(t.date)
      }
    })

    let obj = {}
    this.state.summedUpDates.forEach((d, i) => {
      obj[i] = {
        date: d,
        donations: this.state.donations[i],
        redemptions: this.state.redemptions[i]
      }
    })
    const transactions = Object.values(obj)
    return transactions
  }

  render() {
    if (!this.props.adminStats) return null
    const trxs = this.getTransactions()
    return (
      <div className='stats'>
        <h3>Donations by Month</h3>
        {this.props.adminStats &&
          <ResponsiveContainer width='100%' height={500} maxWidth={600}>
            <BarChart data={trxs} margin={{ top: 5, right: 25, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray='4 4' />
              <XAxis dataKey="date" label={{ value: 'Month', fill: '#1a2930', offset: -10, position: 'insideBottom' }} />
              <YAxis label={{ value: 'Amount ($)', angle: -90, position: 'center', padding: 10, fill: '#1a2930' }} />
              <Tooltip offset={20} />
              <Legend align='right' verticalAlign='bottom' height={80} width={200} left={20} />
              <Bar dataKey="donations" fill='#F7CE3E' legendType="square" barSize={40} />
              <Bar dataKey="redemptions" fill='#8e9b9f' legendType="square" barSize={40} />
            </BarChart>
          </ResponsiveContainer>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    adminStats: state.adminStats
  }
}

export default connect(mapStateToProps)(AdminStats)




