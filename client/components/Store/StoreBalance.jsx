import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getStoreBalance} from '../../actions/storeBalance'
import CircularProgressbar from 'react-circular-progressbar'

export class StoreBalance extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentBalance: 0
    }
  }

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.getStoreBalance(id)
  }

  render () {
    if (!this.props.storeBalance) {
      return null
    }
    const endBalance = this.props.storeBalance.donations
    let counter = 0
    counter = setInterval(() => {
      if (this.state.currentBalance < endBalance) {
        const nextBalance = this.state.currentBalance + 1
        this.setState({currentBalance: nextBalance})
      } else {
        clearInterval(counter)
      }
    },
    100
    )

    const id = this.props.match.params.id
    return (
      <div className='store-balance'>
        <div className='total-balance'>
          <div>
            <p>Total Donation Balance</p>
            <CircularProgressbar
              percentage={Math.floor(this.state.currentBalance / endBalance * 100)}
              fill-opacity='10'
              strokeWidth={50}
              text={`$${this.state.currentBalance}`}
              styles={{
                text: {
                  fill: '#1a2930',
                  fontSize: '20px'
                },
                path: {
                  transition: 'stroke-dashoffset 1.14s ease 0s',
                  stroke: '#8e9b9f',
                  transform: 'rotate(90deg)',
                  transformOrigin: 'center center'
                },
                trail: {stroke: '#ffff'}
              }} />
          </div>
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
