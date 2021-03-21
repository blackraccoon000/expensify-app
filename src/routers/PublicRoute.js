import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PublicRoute = (props) => {
  const {
    isAuthenticated,
    component: Component,
    ...rest
  } = props
  return (
  <Route {...rest} component={(props)=>(
    isAuthenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <div>
        <Component {...props}/>
      </div>
    )
  )}/>
)}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
})

export { PublicRoute }
export default connect(mapStateToProps)(PublicRoute)