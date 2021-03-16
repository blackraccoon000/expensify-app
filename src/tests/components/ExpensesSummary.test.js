import React from "react"
import { shallow } from "enzyme"
import { ExpensesSummary } from "../../components/ExpensesSummary"
import selectExpensesTotal from "../../selectors/expenses-total"
import expenses from "../fixtures/expenses"

let wrapper

beforeEach(()=>{
  wrapper = shallow(<ExpensesSummary/>)
})

it("should render ExpensesSummary",()=>{
  wrapper = shallow(<ExpensesSummary/>)
  expect(wrapper).toMatchSnapshot()
})

it("should render count 10 total 10000 ExpensesSummary",()=>{
  wrapper.setProps({
    expenseCount:10,
    expensesTotal:10000
  })
  // wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={100}/>)
  expect(wrapper).toMatchSnapshot()
})

it("should render count 10 total 10000 ExpensesSummary",()=>{
  // wrapper = shallow(<ExpensesSummary expenseCount={10} expensesTotal={100000}/>)

  wrapper.setProps({
    expenseCount:expenses.length,
    expensesTotal:selectExpensesTotal(expenses)
  })
  expect(wrapper).toMatchSnapshot()
})

