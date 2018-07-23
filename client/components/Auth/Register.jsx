import React from 'react'
import {connect} from 'react-redux'
import {clearError} from '../../actions'
import {Redirect} from 'react-router-dom'
import {register} from '../../actions/auth/register'

export class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      owner: '',
      store: '',
      address: '',
      phone: '',
      password: '',
      confirm: '',
      match: '',
      message: 'Passwords do not match',
      badEmail: false,
      emailMessage: 'Email invalid',
      weakPassword: false,
      passwordMsg: 'Weak password'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.verifyEmail = this.verifyEmail.bind(this)
    this.verifyPassword = this.verifyPassword.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    let match = this.state.match
    match = name === 'password' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.password : match
    this.setState({
      [name]: value,
      match: match
    })
  }

  verifyEmail () {
    const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
    if (!re.test(String(this.state.email).toLowerCase())) {
      this.setState({
        badEmail: true
      })
    }
  }

  verifyPassword () {
    const symbols = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})')
    if (!symbols.test(this.state.password)) {
      this.setState({
        weakPassword: true
      })
    }
  }

  handleSubmit (e) {
    const {register} = this.props
    this.verifyEmail()
    this.verifyPassword()
    if (!this.state.badEmail && !this.state.weakPassword) {
      const user = {
        owner: this.state.owner,
        email: this.state.email,
        name: this.state.store,
        address: this.state.address,
        phone: this.state.phone,
        password: this.state.password
      }
      register(user)
      e.preventDefault()
    }
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
      color: 'red',
      display: 'inline'
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
            <label htmlFor='address'>Address: </label>
            <input
              type='text'
              name='address' id='address'
              placeholder='Address..'
              onChange={this.handleChange}
              value={this.state.address} />
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
            <label htmlFor='password'>Password: </label>
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
