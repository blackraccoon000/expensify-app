import { sortBy } from "lodash"
import { createStore, combineReducers } from "redux"
import uuid from "uuid"

// 作成予定のActionGenerators種類
// ADD_EXPENSE
const addExpense = (
  {
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
  } = {}
) => (
  {
  type:"ADD_EXPENSE",
  expense:{
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE
const removeExpense = ({id=""}={}) => ({
  type:"REMOVE_EXPENSE",
  id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type:"EDIT_EXPENSE",
  id,
  updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type:"SET_TEXT_FILTER",
  text
})

// SORT_BY_DATE
const sortByDate = () => ({
  type:"SORT_BY_DATE"
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type:"SORT_BY_AMOUNT"
})

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
})

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
})


const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState,action) => {
  const { type, expense, id:actionId, updates } = action
  switch (type) {
    case "ADD_EXPENSE":
      return [
        ...state,
        expense
      ]
    case "REMOVE_EXPENSE":
      return state.filter(({id}) => id !== actionId)
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if(expense.id === actionId) {
          return {
            ...expense,
            ...updates
          }
        } else {
          return expense
        }
      })
    // case "SORT_BY_AMOUNT":
    //   // state.sort((a,b)=>console.log("a:",a.amount,"b:",b.amount,"a-b:",a.amount-b.amount))
    //   const sortAmount = state.sort((a,b)=>a.amount-b.amount)
    //   return sortAmount
    // case "SORT_BY_DATE":
    //   const sortCreateAt = state.sort((a,b)=>a.createdAt-b.createdAt)
    //   return sortCreateAt
    default:
      return state
  }
}

const filtersReducerDefaultState = {
  text:"",
  sortBy:"date",
  startDate:undefined,
  endDate:undefined
}

const filtersReducer = (state = filtersReducerDefaultState,action) => {
  const { type, text, startDate, endDate } = action
  switch (type) {
    case "SET_TEXT_FILTER" :
      return {
        ...state,
        text
      }
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy:"amount"
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy:"date"
      }
    case "SET_START_DATE" :
      return {
        ...state,
        startDate
      }
    case "SET_END_DATE" :
      return {
        ...state,
        endDate
      }
    default:
      return state
  }
}

// filters => { text, sortBy, startDate, endDate }
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  const filterExpenses = expenses.filter(expense => {
    const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  })
  const sortExpenses = filterExpenses.sort((a,b) => {
    if(sortBy === "date") {
      return a.createdAt - b.createdAt
    } else if (sortBy === "amount") {
      return a.amount - b.amount
    }
  })
  return sortExpenses
}

const store = createStore(
  combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
  })
)

console.log("start:",store.getState())

const demoState = {
  expenses: [{
    id: "pdkaofkdoa",
    description: "January Rent",
    note: "This was the final payment for that address",
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

// 監視
store.subscribe(()=>{
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
  console.log("watching:",visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description:"Rent",amount:100,createdAt:10000}))
const expenseTwo = store.dispatch(addExpense({description:"Coffee",amount:500,createdAt:200000}))
store.dispatch(addExpense({description:"IceCoffee",amount:300,createdAt:-2000}))
// const expenseThree = store.dispatch(addExpense({description:"Cake",amount:800,createdAt:2}))
// store.dispatch(addExpense({description:"Cookie",amount:50,createdAt:3}))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:1000, description:"SpecialCoffee"}))
// store.dispatch(setTextFilter("fee"))
// store.dispatch(setTextFilter("re"))
store.dispatch(sortByAmount()) // amount
// store.dispatch(sortByDate()) // date

// store.dispatch(setStartDate(-2000)) // startDate 125
// store.dispatch(setStartDate()) // startDate undefined
// store.dispatch(setEndDate(1250)) // endDate 1250