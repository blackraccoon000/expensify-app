import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { startLogout } from "../actions/auth"

const NavMenu = () => {
  return (
    <div className="">
      <div>
        <input type="checkbox" id="menu-btn-check"/>
        <label htmlFor="menu-btn-check" className="menu-btn">
          <span className="humBorder"></span>
        </label>
      </div>
      <div className="navMenu">
        <ul>
          <li><NavLink activeClassName="is-active" to="/Dashboard">Dashboard</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/help">Help</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/404">NotFound</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/" onClick={() => console.log("click!")}>Logout</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  startLogoutDispatcher: () => dispatch(startLogout())
})

export { NavMenu }
export default connect(undefined,mapDispatchToProps)(NavMenu)