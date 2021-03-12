import React from "react"
import ReactDOM from "react-dom"

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
    <p>hogehoge : {props.test}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? ( // isAuthenticated => true
        <div>
          <p>You're login Success!</p>
          <WrappedComponent {...props}/>
        </div>
      ) : ( // isAuthenticated => false
        <div>
          <p>Please login to view the info!</p>
        </div>
      )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" test="sawawawaawa"/>,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" test="sawawawaawa"/>,document.getElementById('app'))