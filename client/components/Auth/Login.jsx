import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/auth/login'
import {clearError} from '../../actions'
import {Redirect} from 'react-router-dom'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const {login} = this.props
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user)
    this.setState({redirect: true})
    e.preventDefault()
  }

  render () {
    if (this.state.redirect) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <div className='login'>
          <form>
            <fieldset>
              <h2>Login</h2>
              <label htmlFor='email'>Email: </label>
              <input type='text' name='email' id='email' placeholder='Email'
                onChange={this.handleChange} value={this.state.email} />
              <br />
              <label htmlFor='password'>Password: </label>
              <input type='password' name='password' placeholder='password'
                onChange={this.handleChange} value={this.state.password} />
              <br />
              <button type='button' className='button' onClick={this.handleSubmit}>Login</button>
            </fieldset>
          </form>
        </div>
      )
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: (user) => {
      dispatch(clearError())
      return dispatch(login(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
