import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import {submitDonation} from '../actions/donations'
import {Redirect} from 'react-router-dom'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export class Donations extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      amountSelected: false,
      amount: 0,
      modalIsOpen: false,
      redirect: false
    }
    this.handleConfirm = this.handleConfirm.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  openModal () {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal () {
    this.setState({
      modalIsOpen: false
    })
  }

  handleConfirm () {
    this.closeModal()
    this.setState({
      amountSelected: true
    })
  }

  handleClick (value) {
    this.openModal()
    this.setState({
      amount: value
    })
  }

  handleSubmit () {
    const donation = this.state.amount
    const id = Number(this.props.match.params.id)
    this.props.submitDonation(donation, id)
    this.setState({
      redirect: true
    })
  }

  render () {
    if (this.state.redirect) {
      const id = Number(this.props.match.params.id)
      return (
        <Redirect to={`/store/${id}`} />
      )
    } else {
      return (
        <div className='donations'>
          <h2>Donations</h2>
          <p>Thank you for choosing to help!</p>
          <p>Every little bit counts.</p>
          <div className='donations-buttons'>
            <button type='button' className='button' onClick={this.handleClick.bind(this, 1)}>$1</button>
            <br/>
            <button type='button' className='button' onClick={this.handleClick.bind(this, 3)}>$3</button>
            <br/>
            <button type='button' className='button' onClick={this.handleClick.bind(this, 5)}>$5</button>
            <br/>
            <button type='button' className='button' onClick={this.handleClick.bind(this, 10)}>$10</button>
            <br/>
          </div>
          <div className='donate-button'>
            <button type='button' className='button' id="submitDonationBtn" disabled={!this.state.amountSelected} onClick={this.handleSubmit}>Donate</button>
          </div>
          <div className='donatepic'>
            <img src='/images/hands.jpg' />
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='Confirm donation'
            ariaHideApp={false}
          >
            <h4>Please confirm your donation</h4>
            <p>${this.state.amount}</p>
            <button type='button' className='button' onClick={this.handleConfirm}>Confirm</button>
          </Modal>
        </div>
      )
    }
  }
}

function mapDispatchToStore (dispatch) {
  return {
    submitDonation: (donation, id) => {
      return dispatch(submitDonation(donation, id))
    }
  }
}

export default connect(null, mapDispatchToStore)(Donations)
