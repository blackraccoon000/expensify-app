import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" })

  // --> Failed
  // expect(action).toBe({
  //   type: "REMOVE_EXPENSE",
  //   id: "123abc"
  // })

  // --> Passed
  // expect(action).toMatchObject({
  //   type: "REMOVE_EXPENSE",
  //   id: "123abc"
  // })

  // --> Passed 要素がなくてもPassする。
  // expect(action).toMatchObject({
  //   type: "REMOVE_EXPENSE",
  // })

  // --> Passed
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  })

  // --> Failed
  // expect(action).toEqual({
  //   type: "REMOVE_EXPENSE",
  // })
})

test("should setup edit expense action object", () => {
  const action = editExpense("123abc",{
    description:"New Description value",
    note:"New Note value"
  })
  expect(action).toEqual({
    type:"EDIT_EXPENSE",
    id:"123abc",
    updates: {
      description:"New Description value",
      note:"New Note value"
    }
  })
})

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent"
  }
  const action = addExpense(expenseData)
  // console.log("id:",action.expense.id)
  expect(action).toEqual({
    type:"ADD_EXPENSE",
    expense: {
      ...expenseData,
      id:expect.any(String)
    }
  })
})

test("should setup add expense action object with default values", () => {
  const expenseDefaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  const action = addExpense()
  expect(action).toEqual({
    type:"ADD_EXPENSE",
    expense:{
      ...expenseDefaultData,
      id:expect.any(String)
    }
  })
})