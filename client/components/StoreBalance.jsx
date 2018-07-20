import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getStoreBalance} from '../client/actions/storeBalance'

export class StoreBalance extends React.Component {
  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.getStoreBalance(id)
  }

  render () {
    return (
      <div className='store-balance'>
        <div className='redeem'>
          <Link to='/store/:id/redeem' className='button'>Redeem</Link>
        </div>
        <p>Total Store Balance</p>
        {this.storeTotal && <p>{this.props.storetotal}</p>}

        <div className='donation'>
          <Link to='/store/:id/donation' className='button'>Donate</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    storeTotal: state.storeTotal
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getStoreBalance: (id) => {
      return dispatch(getStoreBalance(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreBalance)
