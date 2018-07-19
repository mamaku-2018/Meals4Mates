import React from 'react'
import {connect} from 'react-redux'
import {clearError} from '../../actions'
import {edit} from '../../actions/auth/edit'// action to be written

export class StoreInfoEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      owner: '',
      phone: 0,
      email: '',
      address: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler (e) {
    const user = {
      name: this.state.name,
      owner: this.state.owner,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address
    }

    this.props.edit(user)
    e.preventDefault()
  }

  render () {
    const info = this.props.storeInfo
    return (

      <div className='StoreInfoEdit'>
        <form>
          <fieldset>
            <h2 className='StoreInfo'>Add Store</h2>
            <label htmlFor='name' >Name:</label>
            <input placeholder={info.name} value={this.state.name} onChange={this.changeHandler} name='name'/>
            <br />
            <label htmlFor='owner' >Owner:</label>
            <input placeholder={info.owner} value={this.state.owner} onChange={this.changeHandler} name='owner'/>
            <br />
            <label htmlFor='phone'>Phone Number:</label>
            <input placeholder={info.phone} value={this.state.phone} onChange={this.changeHandler} name='phone'/>
            <br />
            <label htmlFor='email'>Email:</label>
            <input placeholder={info.email} value={this.state.email} onChange={this.changeHandler} name='email'/>
            <br />
            <button className='addButt' onClick={this.submitHandler}>SUBMIT</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    storeInfo: state.storeInfo
  }
}

function mapDispatchToProps (dispatch) {
  return {
    edit: (user) => {
      dispatch(clearError())
      return dispatch(edit(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreInfoEdit)
