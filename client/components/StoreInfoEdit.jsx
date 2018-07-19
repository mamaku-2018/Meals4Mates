import React from 'react'
import {connect} from 'react-redux'
import {updateStoreInfo} from '../actions/store'

export class StoreInfoEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      owner: '',
      phoneNumber: 0,
      email: '',
      address: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler (e) {
    this.props.dispatch(updateStoreInfo(this.state))
  }

  render () {
    return (
      <div className='StoreInfoEdit'>
        <h2 className='StoreInfo'>Add Store</h2>
        <h3>Name:</h3>
        <input onChange={this.changeHandler} name='name'/>
        <h3>Owner:</h3>
        <input onChange={this.changeHandler} name='owner'/>
        <h3>Phone:</h3>
        <input onChange={this.changeHandler} name='phone'/>
        <h3>Email:</h3>
        <input onChange={this.changeHandler} name='email'/>
        <h3>Password:</h3>
        <input onChange={this.changeHandler} name='password'/>
        <button className='addButt' onClick={this.submitHandler}>SUBMIT</button>
      </div>
    )
  }
}

export default connect(StoreInfoEdit)
