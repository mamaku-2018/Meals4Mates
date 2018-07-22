import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import StoreProfile from './StoreProfile'
import Donations from './Donations'
import StoreStats from './StoreStats'
import Admin from './Admin'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Switch>
          <Route exact path='/store/:id/donate' component={Donations} />
          <Route path='/store/:id' component={StoreProfile} />
        </Switch>
        <Route path='/' component={Footer} />
        <Route path='/store/:id/stats' component={StoreStats} />
      </div>
    </Router>
  )
}

export default App
