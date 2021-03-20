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
      <div>
        <p>Welcome Login Page</p>
        <button onClick={this.props.startLoginDispatcher}>Login</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startLoginDispatcher: () => dispatch(startLogin())
})

export { LoginPage }
export default connect( undefined, mapDispatchToProps )(LoginPage)