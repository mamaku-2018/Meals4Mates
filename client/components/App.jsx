import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Header from './Header'
import Home from './Home/Home'
import Footer from './Footer'
import StoreProfile from './Store/StoreProfile'
import Donations from './Donations'
import Admin from './Admin/Admin'
import StoreStats from './Store/StoreStats'
import WaitIndicator from './WaitIndicator'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Home} />
        <WaitIndicator />
        <Route path='/admin' component={Admin} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Switch>
          <Route path='/store/:id/donate' component={Donations} />
          <Route path='/store/:id' component={StoreProfile} />
        </Switch>
        <Route path='/store/:id' component={StoreStats} />
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App
