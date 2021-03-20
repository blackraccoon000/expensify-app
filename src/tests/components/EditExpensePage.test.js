import React from "react"
import { shallow } from "enzyme"
import { EditExpensePage } from "../../components/EditExpensePage"
import expenses from "../fixtures/expenses"

describe("EditExpensePageのテストを実施する",()=>{
  let startEditExpense, startRemoveExpense, history, wrapper

  beforeEach(()=>{
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage
      startEditExpense = {startEditExpense}
      startRemoveExpense = {startRemoveExpense}
      expense = { expenses[0] }
      history = {history}
    />)
  })
  it("should render EditExpensePage",()=>{
    expect(wrapper).toMatchSnapshot()
  })

  it("should handle startEditExpense", () => {
    const updates = {
      note:"New Note value",
      description: "New Description value"
    }
    wrapper.find("ExpenseForm").prop("onSubmit")(updates)
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,updates)
  })

  it("should handle startRemoveExpense", () => {
    // wrapper.find("button").prop("onClick")()
    wrapper.find("button").simulate("click")
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id})
  })
})