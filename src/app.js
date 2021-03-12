import React from "react"
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

import "normalize.css/normalize.css"
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from "./routers/AppRouters"
import configureStore from "./store/configureStore"
import { addExpense } from "./actions/expenses";
import { setTextFilter,sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses"

const store = configureStore()

// 監視
store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  // console.log("filter:",state.filters.text)
  // console.log("watch:",visibleExpenses)
});

store.dispatch(addExpense({description:"Rent",amount:109500}))
store.dispatch(addExpense({description:"Gas bill",amount:340,createdAt:1000}))
store.dispatch(addExpense({description:"Water bill",amount:3000,createdAt:50}))
// store.dispatch(sortByAmount())
// store.dispatch(setTextFilter("Bill"))

// setTimeout(() => {
//   store.dispatch(setTextFilter("rent"))
// }, 3000);

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))