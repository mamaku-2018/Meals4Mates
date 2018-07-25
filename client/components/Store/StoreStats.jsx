import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {connect} from 'react-redux'
import {getStoreStats} from '../../actions/storeStats'

class StoreStats extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      donation: [],
      redemption: [],
      summedUpDates: [],
      transactions: []
    }
  }

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.dispatch(getStoreStats(id))
    window.scrollTo(0, 0)
  }

  render () {
    if (!this.props.storeStats) return null
    return (
      <div className='stats'>
        <h3>Donations by Month</h3>
        {this.props.storeStats &&
          <ResponsiveContainer width='100%' height={500} maxWidth={600}>
            <BarChart data={this.props.storeStats} margin={{top: 5, right: 25, left: 5, bottom: 5}}>
              <CartesianGrid strokeDasharray='4 4' />
              <XAxis dataKey="date" label={{value: 'Month', fill: '#e4e2e2', offset: -10, position: 'insideBottom'}} />
              <YAxis label={{value: 'Amount ($)', angle: -90, position: 'center', padding: 10, fill: '#e4e2e2'}} />
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
