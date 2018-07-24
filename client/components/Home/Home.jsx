import React from 'react'
import {connect} from 'react-redux'
import {clearError} from '../../actions/'

import Banner from './Banner'
import Locations from '../Locations'
import Advertising from './Advertising'

class Home extends React.Component {
  componentDidMount () {
    this.props.clearError()
  }
  render () {
    return (
      <div className='main-container'>
        <Banner />
        <Locations />
        <Advertising />
      </div>

    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    clearError: () => {
      dispatch(clearError())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)
