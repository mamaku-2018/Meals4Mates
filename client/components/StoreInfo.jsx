import React from 'react'
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
// import {getStoreInfo} from '../actions/getStoreInfo'

class StoreInfo extends React.Component {
  // componentsDidMount () {
  //   const id = this.props.match.params.id
  //   this.props.dispatch(getStoreInfo(id))
  // }

  render () {
    return (
      <div>Hi
        <div className='StoreInfo'>
          <Link to='/store/:id/edit' className='button'>Edit</Link>
        </div>
        {/* <h2>{this.props.storeInfo.name}</h2>
        <p>{this.props.storeInfo.owner}</p>
        <p>{this.props.storeInfo.phone}</p>
        <p>{this.props.storeInfo.address}</p> */}
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     storeInfo: state.storeInfo
//   }
// }

// export default connect(mapStateToProps)(StoreInfo)
export default StoreInfo
