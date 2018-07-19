import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import {submitDonation} from '../../actions/donations'

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
      modalIsOpen: false
    }
    this.handleConfirm = this.handleConfirm.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
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
    this.props.submitDonation(donation)
  }

  render () {
    return (
      <div className='donations'>
        <h2>Every little helps</h2>
        <button type='button' onClick={this.handleClick.bind(this, 1)}>$1</button>
        <br/>
        <button type='button' onClick={this.handleClick.bind(this, 3)}>$3</button>
        <br/>
        <button type='button' onClick={this.handleClick.bind(this, 5)}>$5</button>
        <br/>
        <button type='button' onClick={this.handleClick.bind(this, 10)}>$10</button>
        <br/>
        <button type='button' disabled={!this.state.amountSelected}>Donate</button>
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
          <button type='button' onClick={this.handleConfirm}>Confirm</button>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToStore (dispatch) {
  return {
    submitDonation: (donation) => {
      return dispatch(submitDonation(donation))
    }
  }
}

export default connect(null, mapDispatchToStore)(Donations)
