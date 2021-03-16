export default (expenses) => {
  return expenses
  .map(expense => expense.amount)
  .reduce( (accu,curr)=> accu+curr,0 )
}