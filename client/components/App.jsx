import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import StoreProfile from './StoreProfile'
import Donations from './Donations'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/store/:id/donate' component={Donations} />
        <Route exact path='/store/:id' component={StoreProfile} />
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App
