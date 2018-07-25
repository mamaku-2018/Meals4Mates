import React from 'react'
import {connect} from 'react-redux'
import {clearError} from '../../actions'
import {Redirect, Link} from 'react-router-dom'
import {register} from '../../actions/auth/register'
import {isValidEmail, isWeakPassword} from '../../lib/securityVal'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      owner: '',
      phone: '',
      email: '',
      address: '',
      suburb: '',
      city: '',
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
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  handleChange (e) {
    const {name, value} = e.target
    let match = this.state.match
    match = name === 'password' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.password : match
    this.setState({
      [name]: value,
      match: match,
      weakPassword: isWeakPassword(this.state.password),
      badEmail: isValidEmail(this.state.email)
    })
  }

  handleSubmit (e) {
    const {register} = this.props
    if (!this.state.badEmail && !this.state.weakPassword) {
      const user = {
        owner: this.state.owner,
        email: this.state.email,
        name: this.state.name,
        address: this.state.address,
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
        <Redirect to='/login' />
      )
    }
    return (
      <div className='register'>
        <form>
          {this.props.message && <span className='error'>
            {this.props.message}</span>}
          <fieldset>
            <h2>Register</h2>
            <label htmlFor='name'>Store: </label>
            <input
              type='text'
              name='name'
              id='name'
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
            {this.state.badEmail && <span className='error'>
              {this.state.emailMessage}</span>}
            <br />
            <label htmlFor='address'>Street: </label>
            <input
              type='text'
              name='address' id='address'
              placeholder='Street..'
              onChange={this.handleChange}
              value={this.state.address} />
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
            <label htmlFor='password'>Password:
              <span className='greyed'>(min 8 char - 1 upper, lower, num, special char)
              </span>
            </label>
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
            {this.state.weakPassword && <span className='error'>
              {this.state.passwordMsg}</span>}
            {!this.state.match && <span className='error'>
              {this.state.message}</span>}
            <br />
            <button
              type='button'
              disabled={!this.state.match}
              className='button'
              onClick={this.handleSubmit}>Register
            </button>
            <Link to='/' type='button' className='button cancel-button' >Cancel</Link>
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
