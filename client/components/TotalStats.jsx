import React from 'react'
import {connect} from 'react-redux'
import {getTotalStats} from '../actions/getTotalStats'

class TotalStats extends React.Component {
  componentDidMount () {
    this.props.dispatch(getTotalStats())
  }
  render () {
    const total = (this.props.totalStats || 0)
    return (
      <div className='TotalStats'>
        <p>Total Donations Made: {total.donations}</p>
        <p>Total Amout Redeemed: {total.redemptions}</p>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    totalStats: state.totalStats
  }
}

export default connect(stateToProps)(TotalStats)
