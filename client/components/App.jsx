import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Auth/Login'
import Header from './Header'
// import Home from './Home'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/' component={Header} />
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/login' component={Login} />

        <Footer />
      </div>
    </Router>
  )
}

export default App
