import React from "react"
import { connect } from "react-redux"
import { startLogin, twitterLogin } from "../actions/auth"
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
          <button className="button button--login" onClick={this.props.startLoginDispatcher}>
            Login with Google
          </button>
          <button className="button button--login" onClick={this.props.twitterLoginDispatcher}>
            Login with Twitter
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startLoginDispatcher: () => dispatch(startLogin()),
  twitterLoginDispatcher: () => dispatch(twitterLogin())
})

export { LoginPage }
export default connect( undefined, mapDispatchToProps )(LoginPage)