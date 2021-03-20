import authReducer from "../../reducers/auth"

const uid = "xxxxxxxxxxxxxxxxxx"

// it("should setup default auth", () =>{
//   const action = { type: "@@INIT" }
//   const state = authReducer(undefined,action)
//   expect(state).toEqual({})
// })

it("should set uid for login auth", () => {
  const action = { type: "LOGIN" , uid }
  const state = authReducer({},action)
  expect(state.uid).toBe(action.uid)
})

it("should unset uid for logout auth", () => {
  const action = { type: "LOGOUT" }
  const state = authReducer({ uid },action)
  expect(state).toEqual({
  })
})