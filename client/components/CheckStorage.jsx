import React from 'react'
import {connect} from 'react-redux'

export class CompanyList extends React.Component {
  componentDidMount () {
    this.props.getAllStoreStats()
  }

  render () {
    return (

    )
  }
}

const mapPropsToState = (state) => {
  return {
    storeStats: state.companyList
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllStoreStats: () => {
      return dispatch(getAllStoreStats())
    }
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(CompanyList)
