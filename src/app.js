import React from "react"
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

import "normalize.css/normalize.css"
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css';
import "./firebase/firebase"
// import "./playground/promises"

import AppRouter from "./routers/AppRouters"
import configureStore from "./store/configureStore"
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter,sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses"

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

const jsxTest = (
  <p>Loading...</p>
)

ReactDOM.render(jsxTest, document.getElementById("app"))

store.dispatch(startSetExpenses()).then(()=>{
  ReactDOM.render(jsx, document.getElementById("app"))
})
