import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getStoreBalance} from '../../actions/storeBalance'
import CircularProgressbar from 'react-circular-progressbar'

export class StoreBalance extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentBalance: 0,
      reload: false
    }
  }

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.getStoreBalance(id)
    window.scrollTo(0, 0)
  }

  render () {
    if (!this.props.storeBalance) {
      return null
    }
    const endBalance = this.props.storeBalance.donations - this.props.storeBalance.redemptions
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
        <div>
          <div className='progress-bar'>
            <CircularProgressbar
              percentage={Math.floor(this.state.currentBalance / endBalance * 100)}
              fill-opacity='10'
              strokeWidth={8}
              text={`$${endBalance}`}
              background
              backgroundPadding={0}
              styles={{
                background: {
                  fill: '#e4e2e2'
                },
                text: {
                  fontSize: '20px',
                  fontWeight: 'bold',
                  fill: '#1a2930',
                  textAnchor: 'middle'
                },
                path: {
                  transition: 'stroke-dashoffset 1.14s ease 0s',
                  stroke: '#f7ce3e',
                  strokelinecap: 'round',
                  transform: 'rotate(90deg)',
                  transformOrigin: 'center center'
                },
                trail: {stroke: '#ffff'}
              }} />
          </div>
          <h4>Current Balance</h4>
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
