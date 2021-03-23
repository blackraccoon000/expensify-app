import React from "react"
import { connect } from "react-redux"
import { startRemoveExpense } from "../actions/expenses"
import { toggleModal } from "../actions/modal"
import Modal from "react-modal"

export class ConfModal extends React.Component {
  constructor(props){
    super(props)
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onRemoveOnHandleCloseModal = this.onRemoveOnHandleCloseModal.bind(this);
  }
  handleCloseModal () {
    this.props.toggleModal(this.props.showModal)
  }
  onRemoveOnHandleCloseModal () {
    this.props.toggleModal(this.props.showModal)
    this.props.startRemoveExpense({id:this.props.id})
    this.props.historyPush("/")
  }
  render() {
    return (
      <Modal
      isOpen={this.props.showModal}
      appElement={document.getElementById('app')}
      contentLabel="Are you sure you want to delete it?"
      onRequestClose={this.handleCloseModal}
      closeTimeoutMS={200}
      className="modal"
      >
        <h3 className="modal__title">Are you sure you want to delete it?</h3>
        <div className="modal-container">
          <button className="button button--alert removeBtn" onClick={this.onRemoveOnHandleCloseModal}>Remove</button>
          <button className="button button--secondary cancelBtn" onClick={this.handleCloseModal}>Cancel</button>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
    showModal: state.modal.showModal
  }
}

const mapDispatchToProps = (dispatch,props) => ({
  startRemoveExpense: id => dispatch(startRemoveExpense(id)),
  toggleModal: bool => dispatch(toggleModal(bool))
})

export default connect(mapStateToProps,mapDispatchToProps)(ConfModal)