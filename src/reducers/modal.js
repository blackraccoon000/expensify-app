export default (state = { showModal: false }, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        showModal: !action.showModal
      }
    default:
      return state
  }
}