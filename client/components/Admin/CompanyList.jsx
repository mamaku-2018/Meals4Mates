import React from 'react'
import {connect} from 'react-redux'
import {getAllStoreStats} from '../../actions/companyList'

export class CompanyList extends React.Component {
  componentDidMount () {
    this.props.getAllStoreStats()
  }

  render () {
    return (
      <div className='companyList'>
        <table>
          <thead>
            <tr className='top-row'>
              <th><br />Store</th>
              <th>Total Donations</th>
              <th>Total Redemptions</th>
              <th>Remaining Balance</th>
            </tr>
          </thead>
          {this.props.storeStats && <tbody>
            {this.props.storeStats.map(stats => {
              return (
                <tr key={stats.id}>
                  <td className='store-name'>{stats.name}</td>
                  <td>${stats.donation}</td>
                  <td>${stats.redemption}</td>
                  <td>${stats.donation - stats.redemption}</td>
                </tr>
              )
            }
            )}
          </tbody>}
        </table>
      </div>
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