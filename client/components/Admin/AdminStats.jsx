import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {connect} from 'react-redux'
import {getAdminStats} from '../../actions/adminStats'

class AdminStats extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      donations: [],
      redemptions: [],
      summedUpDates: [],
      transactions: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getAdminStats())
  }

  render () {
    if (!this.props.adminStats) return null
    return (
      <div className='stats'>
        <h3>Donations by Month</h3>
        {this.props.adminStats &&
          <ResponsiveContainer width='100%' height={500} maxWidth={600}>
            <BarChart data={this.props.adminStats} margin={{top: 5, right: 25, left: 5, bottom: 5}}>
              <CartesianGrid strokeDasharray='4 4' />
              <XAxis dataKey="date" label={{value: 'Month', fill: '#1a2930', offset: -10, position: 'insideBottom'}} />
              <YAxis label={{value: 'Amount ($)', angle: -90, position: 'center', padding: 10, fill: '#1a2930'}} />
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
    adminStats: state.adminStats
  }
}

export default connect(mapStateToProps)(AdminStats)
