import React from 'react'
import {connect} from 'react-redux'
import {clearError} from '../../actions'
import {Redirect} from 'react-router-dom'
import {register} from '../../actions/auth/register'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      owner: '',
      store: '',
      street: '',
      suburb: '',
      city: '',
      phone: '',
      password: '',
      confirm: '',
      match: true,
      message: 'Passwords do not match',
      badEmail: false,
      emailMessage: 'Email invalid',
      weakPassword: false,
      passwordMsg: 'Weak password'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isValidEmail = this.isValidEmail.bind(this)
    this.isWeakPassword = this.isWeakPassword.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    let match = this.state.match
    match = name === 'password' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.password : match
    this.setState({
      [name]: value,
      match: match,
      weakPassword: this.isWeakPassword(),
      badEmail: this.isValidEmail()
    })
  }

  isValidEmail () {
    const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
    return !re.test(String(this.state.email).toLowerCase())
  }

  isWeakPassword () {
    const symbols = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
    return !symbols.test(this.state.password)
  }

  handleSubmit (e) {
    const {register} = this.props
    if (!this.state.badEmail && !this.state.weakPassword) {
      const user = {
        owner: this.state.owner,
        email: this.state.email,
        name: this.state.store,
        street: this.state.street,
        suburb: this.state.suburb,
        city: this.state.city,
        phone: this.state.phone,
        password: this.state.password
      }
      register(user)
    }
    e.preventDefault()
  }

  render () {
    if (this.props.message === 'Registration successful') {
      return (
        <Redirect to='/' />
      )
    } else if (this.props.message === 'This email is already registered') {
      document.getElementById('message').innerHTML = this.props.message
    }
    const style = {
      color: 'red'
    }
    const greyed = {
      color: '#8e9b9f',
      fontSize: 10
    }
    return (
      <div className='register'>
        <form>
          <div id='message'></div>
          <fieldset>
            <h2>Register</h2>
            <label htmlFor='store'>Store: </label>
            <input
              type='text'
              name='store'
              id='store'
              placeholder='Store..'
              onChange={this.handleChange}
              value={this.state.store} />
            <br />
            <label htmlFor='owner'>Owner: </label>
            <input type='text'
              name='owner'
              id='owner'
              placeholder='Store owner (or manager)..'
              onChange={this.handleChange}
              value={this.state.owner} />
            <br />
            <label htmlFor='email'>Email: </label>
            <input type='text'
              name='email'
              id='email'
              placeholder='Email..'
              onChange={this.handleChange}
              value={this.state.email} />
            {this.state.badEmail && <span style={style}>{this.state.emailMessage}</span>}
            <br />
            <label htmlFor='street'>Street: </label>
            <input
              type='text'
              name='street' id='street'
              placeholder='Street..'
              onChange={this.handleChange}
              value={this.state.street} />
            <br />
            <label htmlFor='suburb'>Suburb: </label>
            <input
              type='text'
              name='suburb' id='suburb'
              placeholder='Suburb..'
              onChange={this.handleChange}
              value={this.state.suburb} />
            <br />
            <label htmlFor='city'>City: </label>
            <input
              type='text'
              name='city' id='city'
              placeholder='City..'
              onChange={this.handleChange}
              value={this.state.city} />
            <br />
            <label htmlFor='phone'>Phone no: </label>
            <input
              type='text'
              name='phone'
              id='phone'
              placeholder='Phone..'
              onChange={this.handleChange}
              value={this.state.phone} />
            <br />
            <label htmlFor='password'>Password: &ensp;<span style={greyed}> (Min 8 char with 1 uppercase, 1 lowercase, 1 num, 1 special char)</span></label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password..'
              onChange={this.handleChange}
              value={this.state.password} />
            <br />
            <label htmlFor='confirm'>Confirm password: </label>
            <input
              type='password'
              name='confirm'
              id='confirm'
              placeholder='Confirm password..'
              onChange={this.handleChange}
              value={this.state.confirm} />
            {this.state.weakPassword && <span style={style}>{this.state.passwordMsg}</span>}
            {!this.state.match && <span style={style}>{this.state.message}</span>}
            <br />
            <button
              type='button'
              disabled={!this.state.match}
              className='button'
              onClick={this.handleSubmit}>Register
            </button>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    register: (user) => {
      dispatch(clearError())
      return dispatch(register(user))
    }
  }
}

function mapStateToProps (state) {
  return {
    message: state.errorMessage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
