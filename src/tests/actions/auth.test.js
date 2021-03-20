import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { login, startLogin, logout, startLogout } from "../../actions/auth.js"

const createMockStore = configureMockStore([thunk])
const uid = "xxxxxxxxxxxxxxxxxx"

it("should generate login action object", () => {
  const action = login(uid)
  expect(action).toEqual({
    type: "LOGIN",
    uid
  })
})

// it("should setup action startLogin function", () => {
//   const store = createMockStore({})
//   store.dispatch(startLogin())
//   const actions = store.getActions()
//   console.log("startLogin:",actions)
// })

it("should generate logout action object", () => {
  const action = logout()
  expect(action).toEqual({
    type: "LOGOUT",
  })
})

// it("should setup action startLogin function", () => {
  // const store = createMockStore({})
  // store.dispatch(startLogout()).then(()=>{
  //   const actions = store.getActions()
  //   console.log("startLogout:",actions)
  //   done()
  // })
// })

