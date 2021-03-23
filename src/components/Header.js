import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { startLogout } from "../actions/auth"
import NavMenu from "./NavMenu"

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/Dashboard">
              <h1>Expensify</h1>
            </Link>
            {/* <NavMenu/> */}
            {/* <ol>
              <li><NavLink activeClassName="is-active" to="/" exact>Login</NavLink></li>
              <li><NavLink activeClassName="is-active" to="/Dashboard">Dashboard</NavLink></li>
              <li><NavLink activeClassName="is-active" to="/create">Create Expense</NavLink></li>
              <li><NavLink activeClassName="is-active" to="/help">Help</NavLink></li>
              <li><NavLink activeClassName="is-active" to="/404">NotFound</NavLink></li>
            </ol> */}
            <button className="button button--link" onClick={this.props.startLogoutDispatcher}>Logout</button>
          </div>
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startLogoutDispatcher: () => dispatch(startLogout())
})

export { Header }
export default connect(undefined,mapDispatchToProps)(Header)