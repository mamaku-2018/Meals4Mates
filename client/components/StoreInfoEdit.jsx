import React from 'react'
import {connect} from 'react-redux'
import {clearError} from '../actions'
import {Redirect} from 'react-router-dom'
import {storeInfoEdit} from '../actions/auth/storeInfoEdit'
import {getStoreInfo} from '../actions/getStoreInfo'

export class StoreInfoEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      owner: '',
      phone: 0,
      email: '',
      address: '',
      redirect: false
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.getStoreInfo(id)
  }

  changeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler (e) {
    const id = this.props.match.params.id
    const {storeInfoEdit} = this.props
    const user = {
      name: this.state.name || this.props.userDetails.name,
      owner: this.state.owner || this.props.userDetails.owner,
      phone: this.state.phone || this.props.userDetails.phone,
      email: this.state.email || this.props.userDetails.email,
      address: this.state.address || this.props.userDetails.address,
      id: id
    }
    storeInfoEdit(user)
    this.setState({redirect: true})
    e.preventDefault()
  }

  render () {
    const info = this.props.userDetails
    if (this.state.redirect) {
      const id = this.props.match.params.id
      return (
        <Redirect to={`/store/${id}`} />
      )
    } else {
      return (

        <div className='StoreInfoEdit'>
          {this.props.userDetails &&
          <form>
            <fieldset>
              <h2 className='StoreInfo'>Edit Store Details</h2>
              <label htmlFor='name' >Name:</label>
              <input placeholder={info.name} value={this.state.name} onChange={this.changeHandler} name='name'/>
              <br />
              <label htmlFor='owner' >Owner:</label>
              <input placeholder={info.owner} value={this.state.owner} onChange={this.changeHandler} name='owner'/>
              <br />
              <label htmlFor='Address'>Address:</label>
              <input placeholder={info.address} value={this.state.address} onChange={this.changeHandler} name='address'/>
              <br />
              <label htmlFor='phone'>Phone Number:</label>
              <input placeholder={info.phone} value={this.state.phone} onChange={this.changeHandler} name='phone'/>
              <br />
              <label htmlFor='email'>Email:</label>
              <input placeholder={info.email} value={this.state.email} onChange={this.changeHandler} name='email'/>
              <br />
              <button className='button' onClick={this.submitHandler}>SUBMIT</button>
            </fieldset>
          </form>}
        </div>
      )
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getStoreInfo: (id) => {
      return dispatch(getStoreInfo(id))
    },
    storeInfoEdit: (user) => {
      dispatch(clearError())
      return dispatch(storeInfoEdit(user))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreInfoEdit)
