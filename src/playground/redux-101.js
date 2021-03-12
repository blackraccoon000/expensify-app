import React from "react"
import ReactDOM from "react-dom";
import { createStore } from "redux";

const add = ({a,b},c) => a+b+c
console.log(add({a:1,b:12},100))



const incrementCount = ({incrementBy = 1}={}) => ({
  type: "INCREMENT",
  incrementBy
})

const decrementCount = ({decrementBy = 1}={}) => ({
  type: "DECREMENT",
  decrementBy
})

const setCount = ({setCount = 0}={}) => ({
  type: "SET",
  setCount
})

const resetCount = () => ({
  type: "RESET"
})

// Reducers
const countReducer = (state = {count:0}, action) => {
  const { type, setCount, incrementBy, decrementBy } = action
  const { count } = state
  switch (type) {
    case "INCREMENT":
      return {
        count: count + incrementBy
      }
    case "DECREMENT":
      return {
        count: count - decrementBy
      }
    case "SET":
      return {
        count: setCount
      }
    case "RESET":
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

store.subscribe(()=>{
  console.log(store.getState())
})

const increment = () => store.dispatch(incrementCount())
const increment5 = () => store.dispatch(incrementCount({incrementBy:5}))
const decrement = () => store.dispatch(decrementCount())
const decrement10 = () => store.dispatch(decrementCount({decrementBy:10}))
const set = () => store.dispatch(setCount({setCount:101}))
const reset = () => store.dispatch(resetCount())

const App = () => {
  return (
    <div>
      <button onClick={increment}>Inc</button>
      <button onClick={increment5}>Inc5</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={decrement10}>Dec10</button>
      <button onClick={set}>set101</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('app'))