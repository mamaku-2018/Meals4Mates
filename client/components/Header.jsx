import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {clearError} from '../actions/index'
import {logStoreOut} from '../actions/auth/login'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedOut: false
    }
    this.logout = this.logout.bind(this)
  }

  logout () {
    const {logStoreOut} = this.props
    logStoreOut()
    this.setState({
      loggedOut: true
    })
  }
  render () {
    if (this.state.loggedOut === true) {
      this.setState({
        loggedOut: false
      })
      return (<Redirect to='/' />)
    }
    return (
      <nav className='navbar'>
        <div className='navbar-brand'>
          <a className='logo' href='/'>
            <img src='/images/logo.png' alt='M4M logo' />
          </a>
        </div>
        <div className='navbar-menu'>
          {!this.props.logIn && <Link to='/login' className='button'>Login</Link>}
          {!this.props.logIn && <Link to='/register' className='button'>Register</Link>}
          {this.props.logIn && <button className='button' onClick={this.logout}>Log out</button>}
        </div>
      </nav>
    )
  }
}

function mapStateToProps (state) {
  return {
    logIn: state.login
  }
}

function mapDispatchToProps (dispatch) {
  return {
    logStoreOut: () => {
      dispatch(clearError())
      return dispatch(logStoreOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
