import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getStoreInfo} from '../actions/getStoreInfo'

class StoreInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.getStoreInfo(id)
  }

  render () {
    const id = Number(this.props.match.params.id)
    return (
      <div>
        <div className='StoreInfo'>
          <Link to={`/store/${id}/edit`} className='button'>Edit</Link>
        </div>
        {this.props.userDetails &&
        <div>
          <h2>{this.props.userDetails.name}</h2>
          <p>{this.props.userDetails.owner}</p>
          <p>{this.props.userDetails.phone}</p>
          <p>{this.props.userDetails.email}</p>
          <p>{this.props.userDetails.address}</p>
        </div>}
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getStoreInfo: (id) => {
      return dispatch(getStoreInfo(id))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreInfo)
// export default StoreInfo
