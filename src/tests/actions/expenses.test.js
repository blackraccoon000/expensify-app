import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses } from "../../actions/expenses";
import expenses from "../fixtures/expenses"
import database from "../../firebase/firebase"

const createMockStore = configureMockStore([thunk])

beforeEach((done)=>{
  const expensesData = {}
  expenses.map(({id,description,note,amount,createdAt})=>{
    expensesData[id] = { description, note, amount, createdAt }
  })
  database.ref("expenses").set(expensesData).then(_=>{done()})
})

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" })
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  })
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
  const action = addExpense(expenses[0])
  expect(action).toEqual({
    type:"ADD_EXPENSE",
    expense: expenses[0]
  })
})

it("should add expense to database and store",(done)=>{
  const store = createMockStore({})
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData))
  .then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id:expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once("value")
  })

  .then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })

})

it("should add expense with defaults to database and store",(done)=>{
  const store = createMockStore({})
  const expenseDefault = {
    description:"",
    note:"",
    amount:0,
    createdAt:0
  }

  store.dispatch(startAddExpense())
  .then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id:expect.any(String),
        ...expenseDefault
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once("value")
  })

  .then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseDefault)
    done()
  })

})


it("should setup set expense action object with data", () => {
  const actions = setExpenses(expenses)
  expect(actions).toEqual({
    type:"SET_EXPENSES",
    expenses
  })
})

it("should fetch the expenses from firebase", (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})