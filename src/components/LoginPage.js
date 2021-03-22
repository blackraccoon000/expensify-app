import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth"

// export const LoginPage = ({startLogin}) => {
//   return (
//     <div>
//       <p>Welcome Login Page</p>
//       <button onClick={startLogin}>Login</button>
//     </div>
//   )
// }

class LoginPage extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify App</h1>
          <p>It's time to get your expenses under control.</p>
          <button className="button" onClick={this.props.startLoginDispatcher}>
            Login with Google
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startLoginDispatcher: () => dispatch(startLogin())
})

export { LoginPage }
export default connect( undefined, mapDispatchToProps )(LoginPage)