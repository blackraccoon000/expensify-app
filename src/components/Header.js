import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { startLogout } from "../actions/auth"

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Expensify</h1>
        <ol>
          <li><NavLink activeClassName="is-active" to="/" exact>Login</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/Dashboard">Dashboard</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/create">Create Expense</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/help">Help</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/404">NotFound</NavLink></li>
          <button onClick={this.props.startLogoutDispatcher}>Logout</button>
        </ol>
        <hr/>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startLogoutDispatcher: () => dispatch(startLogout())
})

export { Header }
export default connect(undefined,mapDispatchToProps)(Header)