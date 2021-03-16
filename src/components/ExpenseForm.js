import React from "react"
import moment from "moment"

// import { connect } from "react-redux"
// import { addExpense } from "../actions/expenses"
import { SingleDatePicker } from "react-dates"

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      amount:props.expense ? props.expense.amount.toString() : "",
      calenderFocused: false,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      description: props.expense ? props.expense.description : "",
      error:undefined,
      note: props.expense ? props.expense.note : "",
    }
  }

  onAmountChange = (e) => {
    const amount = e.target.value

    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      // console.log(amount)
      this.setState(()=>({ amount }))
    }
  }
  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(()=>({ createdAt }))
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(()=>({ description }))
  }
  onFocusChange = ({ focused }) => {
    // console.log(focused)
    this.setState(()=>({ calenderFocused: focused }))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(()=>({ note }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if(!this.state.description || !this.state.amount) {
      this.setState(()=>({ error:"Please provide description and amount." }))
    } else {
      this.setState(()=>({ error:undefined }))
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
        <h1>Add Expense</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text" autoFocus placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text" placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}/>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={_=>false}
          />
          <textarea
            placeholder="Add a note for your expense (option)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

// const ExpenseForm = ({dispatch}) => (
//   <div>
//     <form
//       onSubmit={e=>{
//         e.preventDefault()
//         dispatch(addExpense({
//           description:e.target.elements[0].value,
//           amount:e.target.elements[1].value
//           }))
//         console.log("created:",e.target.elements[0].value)
//         e.target.elements[0].value = ""
//         e.target.elements[1].value = ""
//         }
//       }
//     >
//       <label>Des:
//         <input type="text" placeholder="Description" autoFocus name="Des"/>
//         <input type="text" placeholder="Amount" autoFocus name="Amo"/>
//       </label>
//         <input type="submit" value="submit"/>
//     </form>
//   </div>
// )

// export default connect()(ExpenseForm)