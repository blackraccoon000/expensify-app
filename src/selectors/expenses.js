import moment from "moment"

// --> Ex: getVisibleExpenses(expenses,filters)
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  const filterExpenses = expenses.filter(expense => {
    // const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate
    // const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment , "day") : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment , "day") : true
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  })
  const sortExpenses = filterExpenses.sort((a,b) => {
    if(sortBy === "date") {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === "amount") {
      return a.amount < b.amount ? 1 : -1
    }
  })
  return sortExpenses
}

export default getVisibleExpenses