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
      <div className='TotalStats'>
        <div className='total-balance donate-circle'>
          <p>Total Amount Donated</p>
          <span>${total.donations}</span>
        </div>
        <div className='total-balance redeem-circle'>
          <p>Total Amount Redeemed</p>
          <span>${total.redemptions}</span>
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
