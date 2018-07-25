import React from 'react'
import {connect} from 'react-redux'
import {clearError} from '../../actions'
import {Redirect, Link} from 'react-router-dom'
import {storeInfoEdit} from '../../actions/auth/storeInfoEdit'
import {getStoreInfo} from '../../actions/getStoreInfo'
import {isValidEmail} from '../../lib/securityVal'

export class StoreInfoEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      owner: '',
      phone: '',
      email: '',
      address: '',
      suburb: '',
      city: '',
      badEmail: false,
      badEmailMessage: 'Email invalid',
      existsEmail: false,
      emailInUseMsg: 'Email already exisits'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    const id = Number(this.props.match.params.id)
    this.props.getStoreInfo(id)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value,
      badEmail: isValidEmail(this.state.email)
    })
  }

  handleSubmit (e) {
    const id = Number(this.props.match.params.id)
    const {storeInfoEdit} = this.props
    if (!this.state.badEmail && !this.state.weakPassword) {
      const user = {
        name: this.state.name || this.props.userDetails.name,
        owner: this.state.owner || this.props.userDetails.owner,
        phone: this.state.phone || this.props.userDetails.phone,
        email: this.state.email || this.props.userDetails.email,
        address: this.state.address || this.props.userDetails.address,
        suburb: this.state.suburb || this.props.userDetails.suburb,
        city: this.state.city || this.props.userDetails.city,
        id: id
      }
      storeInfoEdit(user)
    }
    e.preventDefault()
  }

  render () {
    const id = this.props.match.params.id
    const info = this.props.userDetails
    if (this.props.message === 'Your details have been successfully updated') {
      return (
        <Redirect to={`/store/${id}`} />
      )
    } else {
      return (
        <div className='storeInfoEdit'>
          {this.props.userDetails &&
          <form>
            <fieldset>
              <h2 className='storeInfo'>Edit Store Details</h2>
              {this.props.message === 'Email already in use' && <span className='error'>{this.state.emailInUseMsg}</span>}
              <label htmlFor='name' >Name:</label>
              <input placeholder={info.name} value={this.state.name} onChange={this.handleChange} name='name'/>
              <br />
              <label htmlFor='owner' >Owner:</label>
              <input placeholder={info.owner} value={this.state.owner} onChange={this.handleChange} name='owner'/>
              <br />
              <label htmlFor='address'>Street:</label>
              <input placeholder={info.address} value={this.state.address} onChange={this.handleChange} name='address'/>
              <br />
              <label htmlFor='suburb'>Suburb:</label>
              <input placeholder={info.suburb} value={this.state.suburb} onChange={this.handleChange} name='suburb'/>
              <br />
              <label htmlFor='city'>City:</label>
              <input placeholder={info.city} value={this.state.city} onChange={this.handleChange} name='city'/>
              <br />
              <label htmlFor='phone'>Phone Number:</label>
              <input placeholder={info.phone} value={this.state.phone} onChange={this.handleChange} name='phone'/>
              <br />
              <label htmlFor='email'>Email:</label>
              <input placeholder={info.email} value={this.state.email} onChange={this.handleChange} name='email'/>
              {this.state.badEmail && <span className='error'>{this.state.badEmailMessage}</span>}

              <br />
              <button className='button' onClick={this.handleSubmit}>SUBMIT</button>
              <Link to={`/store/${id}`} className='button'>CANCEL</Link>

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
    userDetails: state.userDetails,
    message: state.errorMessage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreInfoEdit)
