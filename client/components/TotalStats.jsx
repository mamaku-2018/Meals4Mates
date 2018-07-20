import React from 'react'
import {connect} from 'react-redux'
import {getTotalStats} from '../actions/getTotalStats'

class TotalStats extends React.Component {
  componentDidMount () {
    this.props.dispatch(getTotalStats())
  }
  render () {
    const total = (this.props.totalStats || 0)
    const totalBalance = (total && (total.donations - total.redemptions))
    return (
      <div className='TotalStats'>
        {totalBalance}
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
