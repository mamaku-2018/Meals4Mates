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
      redirect: false,
      id: 0
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
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    const goStore = (id) => {
      if (id) {
        this.setState({
          redirect: true,
          id: id
        })
      }
    }
    this.props.login(user, goStore)
    e.preventDefault()
  }

  render () {
    if (this.state.redirect === true) {
      return (
        <Redirect to={`/store/${this.state.id}`} />
      )
    } else if (this.props.message ===
       'Username and password do not match an existing user') {
      document.getElementById('message').innerHTML =
      this.props.message
    }
    return (
      <div className='login'>
        <form>
          <div id='message'></div>
          <fieldset>
            <h2>Login</h2>
            <label htmlFor='email'>Email: </label>
            <input type='text'
              name='email'
              id='email'
              placeholder='Email...'
              onChange={this.handleChange}
              value={this.state.email} />
            <br />
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              placeholder='Password...'
              onChange={this.handleChange}
              value={this.state.password} />
            <br />
            <button
              type='button'
              className='button'
              onClick={this.handleSubmit}>Login
            </button>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: (user, goStore) => {
      dispatch(clearError())
      return dispatch(login(user, goStore))
    }
  }
}

function mapStateToProps (state) {
  return {
    message: state.errorMessage,
    user: state.userDetails
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
