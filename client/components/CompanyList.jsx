import React from 'react'
import {connect} from 'react-redux'

export class CompanyList extends React.Component {
  render () {
    return (
      <div className='companyList'>

      </div>
    )
  }
}

const mapPropsToState = (state) => {
  return {
    storeStats: state
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
