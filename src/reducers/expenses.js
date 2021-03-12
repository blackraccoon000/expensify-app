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
    default:
      return state
  }
}

export default expensesReducer