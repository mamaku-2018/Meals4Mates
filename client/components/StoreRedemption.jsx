import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class StoreRedemption extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      voucher: '',
      amount: null

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
    this.props.dispatch((this.state))
  }

  render () {
    return (
      <div className='store-redemption'>
        <label htmlFor='name' >Voucher</label>
        <input type='text' placeholder={this.state.voucher} value={this.state.voucher} onChange={this.changeHandler} name='voucher'/>
        <label htmlFor='name' >Amount</label>
        <input type='text' placeholder={this.state.amount} value={this.state.amount} onChange={this.changeHandler} name='amount'/>
        <Link to='/store/:id/balance' type='button' className='button' onChange={this.handleChange} value={this.state.StoreRedemption} >Submit</Link>
      </div>
    )
  }
}

export default connect(StoreRedemption)
