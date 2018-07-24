import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getStoreBalance} from '../../actions/storeBalance'

export class StoreBalance extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.getStoreBalance(id)
  }

  render () {
    const id = this.props.match.params.id
    const balance = (this.props.storeBalance && (this.props.storeBalance.donations - this.props.storeBalance.redemptions))
    return (
      <div className='store-balance'>
        <div className='total-balance'>
          <p>Total Donations</p>
          {this.props.storeBalance && <span>${balance}</span>}
        </div>
        <div className='store-balance-buttons'>
          <div className='redeem'>
            <Link to={`/store/${id}/redeem`} className='button'>Redeem</Link>
          </div>
          <div className='donation'>
            <Link to={`/store/${id}/donate`} className='button'>Donate</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    storeBalance: state.storeBalance
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
