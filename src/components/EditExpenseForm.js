import React from "react"
import moment from "moment"

export default class EditExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: props.amount,
      calenderFocused: false,
      createdAt: moment(),
      description: props.description ,
      error:undefined,
      note: props.note
    }
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if(!amount || amount.match(/^\d{1,7}(\.\d{0,2})?$/)) {
      this.setState(()=>({ amount }))
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(()=>({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(()=>({ note }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    if(!this.state.description || !this.state.amount) {
      this.setState(()=>{ error:"Please provide description and amount."})
    } else {
      this.setState(()=>{ error:undefined })
      this.props.onSubmit({
        description:this.state.description,
        amount: parseFloat(this.state.amount,10),
        createdAt: this.state.createdAt.valueOf(),
        note:this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Des:
            <input type="text" value={this.state.description} onChange={this.onDescriptionChange}/>
          </label>
          <label>
            Amount:
            <input type="text" value={this.state.amount} onChange={this.onAmountChange}/>
          </label>
          <label>
            Note:
            <textarea value={this.state.note} onChange={this.onNoteChange}></textarea>
          </label>
          <button>Edit Expense</button>
        </form>
      </div>
    )
  }
}