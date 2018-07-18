import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route path='/header' component={Header} />
        <Route exact path='/' component={Home} />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </Router>
  )
}

export default App
