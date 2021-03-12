import moment from "moment"

const filtersReducerDefaultState = {
  text:"",
  sortBy:"date",
  startDate:moment().startOf("month"),
  endDate:moment().endOf("month")
}

const filtersReducer = (state = filtersReducerDefaultState,action) => {
  const { type, text, startDate, endDate } = action
  switch (type) {
    case "SET_TEXT_FILTER" :
      return {
        ...state,
        text
      }
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy:"amount"
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy:"date"
      }
    case "SET_START_DATE" :
      return {
        ...state,
        startDate
      }
    case "SET_END_DATE" :
      return {
        ...state,
        endDate
      }
    default:
      return state
  }
}

export default filtersReducer