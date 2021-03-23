import { toggleModal } from "../../actions/modal"

it("should generate TOGGLE action object", () => {
  const action = toggleModal()
  expect(action).toEqual({
    type:"TOGGLE_MODAL"
  })
})