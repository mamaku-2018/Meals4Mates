import React from 'react'
import {connect} from 'react-redux'
import {getTotalStats} from '../../actions/getTotalStats'

class TotalStats extends React.Component {
  componentDidMount () {
    this.props.dispatch(getTotalStats())
  }
  render () {
    const total = (this.props.totalStats || 0)
    return (
      <div className='totalStats'>
        <div className='total-balance donate-circle'>
          <p>Amount Donated</p>
          <span>${total.donations}</span>
        </div>
        <div className='total-balance redeem-circle'>
          <p>Amount Redeemed</p>
          <span>${total.redemptions}</span>
        </div>
        <div className='total-balance balance-circle'>
          <p>Balance</p>
          <span>${total.donations - total.redemptions}</span>
        </div>
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
