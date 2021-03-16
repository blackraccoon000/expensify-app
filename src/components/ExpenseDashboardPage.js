import React from "react"
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"
import ExpensesSummary from "./ExpensesSummary"

const ExpenseDashboardPage = () => {
  return (
  <div>
    This is from my dashboard component
    <ExpenseListFilters />
    <ExpenseList />
    <ExpensesSummary />
  </div>
)}

export default ExpenseDashboardPage