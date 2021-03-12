import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ol>
      <li><NavLink activeClassName="is-active" to="/" exact>Dashboard</NavLink></li>
      <li><NavLink activeClassName="is-active" to="/create">Create Expense</NavLink></li>
      <li><NavLink activeClassName="is-active" to="/help">Help</NavLink></li>
      <li><NavLink activeClassName="is-active" to="/404">NotFound</NavLink></li>
    </ol>
    <hr/>
  </header>
)

export default Header