import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import numeral from "numeral"

const ExpenseListItem = ({id,description,amount,createdAt}) => {
  return (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Des:{description}</h3>
    </Link>
    <p>
      amount:{numeral(amount / 100).format("¥0,0.00")}
      -
      createdAt:{moment(createdAt).format("YYYY[/]MM[/]DD , HH:mm:ss")}
    </p>
  </div>
)}

// export default connect()(ExpenseListItem)
export default　ExpenseListItem