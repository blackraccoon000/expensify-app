import moment from "moment"
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses"

test("should setup default expense",()=>{
  const action = { type: "@@INIT" }
  const state = expensesReducer(expenses,action)
  expect(state).toEqual(expenses)
})

test("should set add expense",()=>{
  const expense = {
    id:"4",
    description: 'New description comments',
    note: 'New note comments',
    amount: 100,
    createdAt: moment().valueOf()
  }
  const action = { type: "ADD_EXPENSE", expense }
  const state = expensesReducer(expenses,action)
  expect(state).toEqual([...expenses,expense])
})

test("should set remove expense",()=>{
  const id = expenses[1].id
  const action = { type: "REMOVE_EXPENSE", id }
  const state = expensesReducer(expenses,action)
  expect(state).toEqual([expenses[0],expenses[2]])
})

test("should set remove expense if id not fount",()=>{
  const id = "100"
  const action = { type: "REMOVE_EXPENSE", id }
  const state = expensesReducer(expenses,action)
  expect(state).toEqual(expenses)
})

test("should set edit expense test1",()=>{
  const id = expenses[2].id
  const updates = {
    description: 'Update description comments',
    note: 'Update note comments',
    amount: 330000,
    createdAt: moment()
  }

  const action = { type: "EDIT_EXPENSE", id, updates }
  const state = expensesReducer(expenses,action)

  // --> すべて比較する場合
  const updatesExpenses = [expenses[0],expenses[1],expenses[2]={ id, ...updates}]
  expect(state).toEqual(updatesExpenses)
})

test("should set edit expense test2",()=>{
  const id = expenses[2].id
  const updates = {
    amount: 330000,
  }

  const action = { type: "EDIT_EXPENSE", id, updates }
  const state = expensesReducer(expenses,action)

  // --> 一部比較する場合
  expect(state[2].amount).toBe(updates.amount)
})

test("should set edit expense if expense not found",()=>{
  const id = "100"
  const updates = {
    description: 'Update description comments',
    note: 'Update note comments',
    amount: 330000,
    createdAt: moment()
  }

  const action = { type: "EDIT_EXPENSE", id, updates }
  const state = expensesReducer(expenses,action)
  expect(state).toEqual(expenses)
})

it("should set expenses", () => {
  const action = { type:"SET_EXPENSES", expenses:[expenses[1]] }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1]])
})