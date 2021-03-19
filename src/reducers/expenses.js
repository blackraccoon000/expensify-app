const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState,action) => {
  const { type, expense, expenses, id:actionId, updates } = action
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
    case "SET_EXPENSES":
      return [
        ...expenses
      ]
    default:
      return state
  }
}

export default expensesReducer