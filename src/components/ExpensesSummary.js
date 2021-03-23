import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total.js"
import numeral from "numeral"

class ExpensesSummary extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // Count
    const expenseCount = this.props.expenseCount
    const allExpenseCount = this.props.allExpenseCount
    const hiddenExpensesCount = allExpenseCount - expenseCount

    // Word
    const expenseWord = expenseCount === 1 ? "expense" : "expenses"
    const allExpenseWord = allExpenseCount === 1 ? "expense" : "expenses"
    const hiddenExpensesCountWord = hiddenExpensesCount === 1 ? "expense" : "expenses"

    // Total
    const expensesTotal = this.props.expensesTotal
    const allExpensesTotal = this.props.allExpensesTotal
    const hiddenExpensesTotal = allExpensesTotal - expensesTotal

    // Format
    const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00")
    const formattedAllExpensesTotal = numeral(allExpensesTotal / 100).format("$0,0.00")
    const formattedHiddenExpensesTotal = numeral(hiddenExpensesTotal / 100).format("$0,0.00")

    // Message
    const viewingMessage = <h1 className="page-header__title">Viewing <span>{this.props.expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
    const allMessage = <h2 className="page-header__subTitle">All {allExpenseWord} <span>{allExpenseCount}</span> {allExpenseWord} totalling <span>{formattedAllExpensesTotal}</span></h2>
    const hiddenMessage = <h2 className="page-header__subTitle">Hidden {hiddenExpensesCountWord} <span>{hiddenExpensesCount}</span> {hiddenExpensesCountWord} totalling <span>{formattedHiddenExpensesTotal}</span> (All {formattedAllExpensesTotal})</h2>

    return (
      <div className="page-header">
        <div className="content-container">
          {expenseCount ? viewingMessage : <h2 className="page-header__alert">No Viewing expenses.</h2>}
          {hiddenExpensesCount ?  hiddenMessage : undefined}

          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  const allExpenses = selectExpenses(state.expenses)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    allExpenseCount: allExpenses.length,
    allExpensesTotal: selectExpensesTotal(allExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
export { ExpensesSummary }