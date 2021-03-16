import React from "react"
import { connect } from "react-redux"
import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total.js"
import numeral from "numeral"
import expensesTotal from "../selectors/expenses-total.js"

class ExpensesSummary extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const expenseWord = this.props.expenseCount === 1 ? "expense" : "expenses"
    const formattedExpensesTotal = numeral(this.props.expensesTotal / 100).format("$0,0.00")
    return (
      <div>
        <p>Viewing {this.props.expenseCount} {expenseWord} totalling {formattedExpensesTotal}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
export { ExpensesSummary }