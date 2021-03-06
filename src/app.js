import React from "react"
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

import "normalize.css/normalize.css"
import 'react-dates/lib/css/_datepicker.css';
import "./styles/styles.scss"
import { firebase } from "./firebase/firebase"
// import "./playground/promises"

import AppRouter, { history } from "./routers/AppRouters"
import configureStore from "./store/configureStore"
import LoadingPage from "./components/LoadingPage"
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(<LoadingPage />, document.getElementById("app"))

let hasRendered = false

const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"))
    hasRendered = true
  }
}

firebase.auth().onAuthStateChanged((user)=>{
  if(user) {
    store.dispatch(login(user.uid))
    console.log("sign in")
    // console.log("userId",user.uid)
    store.dispatch(startSetExpenses()).then(()=>{
      renderApp()
      if(history.location.pathname === "/"){
        history.push("/dashboard")
      }
    })
  } else {
    store.dispatch(logout())
    console.log("sign out")
    renderApp()
    history.push("/")
  }
})