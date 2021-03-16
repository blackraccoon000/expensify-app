import React from "react"
import { connect } from "react-redux"
import { editExpense,removeExpense } from "../actions/expenses"
import ExpenseForm from "./ExpenseForm"

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props)
  }
  onRemove= _ =>{
    this.props.removeExpense({id:this.props.expense.id})
    this.props.history.push("/")
  }
  onSubmit= updates =>{
    this.props.editExpense(this.props.expense.id,updates)
    this.props.history.push("/")
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch,props) => ({
  editExpense: (id,updates) => dispatch(editExpense(id,updates)),
  removeExpense: id => dispatch(removeExpense({id}))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)