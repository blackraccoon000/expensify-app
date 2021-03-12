import React from "react"
import { shallow } from "enzyme"
import { EditExpensePage } from "../../components/EditExpensePage"
import expenses from "../fixtures/expenses"

describe("EditExpensePageのテストを実施する",()=>{
  let editExpense, removeExpense, history, wrapper

  beforeEach(()=>{
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage
      editExpense = {editExpense}
      removeExpense = {removeExpense}
      expense = { expenses[0] }
      history = {history}
    />)
  })
  it("should render EditExpensePage",()=>{
    expect(wrapper).toMatchSnapshot()
  })

  it("should handle editExpense", () => {
    const updates = {
      note:"New Note value",
      description: "New Description value"
    }
    wrapper.find("ExpenseForm").prop("onSubmit")(updates)
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,updates)
  })

  it("should handle removeExpense", () => {
    // wrapper.find("button").prop("onClick")()
    wrapper.find("button").simulate("click")
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[0].id})
  })
})