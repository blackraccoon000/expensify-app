import React from "react"
import { Link } from "react-router-dom"

const ExpenseListItem = ({id,description,amount,createdAt}) => {
  return (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Des:{description}</h3>
    </Link>
    <p>amount:{amount} - createdAt:{createdAt}</p>
  </div>
)}

// export default connect()(ExpenseListItem)
export default　ExpenseListItem