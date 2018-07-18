import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Auth/Login'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <h1>Meals4Mates</h1>
        <h2>dev branch made</h2>
        <Route path='/login' component={Login} />
      </div>
    </Router>
  )
}

export default App
