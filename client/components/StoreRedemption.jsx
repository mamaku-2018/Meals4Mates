import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {submitVoucher} from '../actions/storeRedemption'

export class StoreRedemption extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      voucher: '',
      amount: ''
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  submitHandler () {
    const voucher = {
      store_id: Number(this.props.match.params.id),
      voucher: this.state.voucher,
      redemption: Number(this.state.amount)
    }
    this.props.submitVoucher((voucher))
  }

  render () {
    const id = this.props.match.params.id
    return (
      <div className='store-redemption'>
        <form>
          <fieldset>
            <label htmlFor='voucher' >Voucher</label>
            <input type='text' value={this.state.voucher} onChange={this.changeHandler} name='voucher'/>
            <label htmlFor='amount' >Amount</label>
            <input type='text' value={this.state.amount} onChange={this.changeHandler} name='amount'/>
            <Link to={`/store/${id}/balance`} type='button' className='button' onClick={this.submitHandler} value={this.state.StoreRedemption} >Submit</Link>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    submitVoucher: (voucher) => {
      return dispatch(submitVoucher(voucher))
    }
  }
}

export default connect(null, mapDispatchToProps)(StoreRedemption)
