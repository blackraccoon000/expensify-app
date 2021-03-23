import React from "react"
import { connect } from "react-redux"
import { startLogin, twitterLogin, facebookLogin } from "../actions/auth"
class LoginPage extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify App</h1>
          <p className="box-layout__subTitle">It's time to get your expenses under control.</p>
          <div className="box-layout__buttonArea">
            <button className="google button button--login" onClick={this.props.startLoginDispatcher}>
              <i className="fi-social-google-plus"></i> Google
            </button>
            <button className="twitter button button--login" onClick={this.props.twitterLoginDispatcher}>
              <i className="fi-social-twitter"></i> Twitter
            </button>
            <button className="facebook button button--login" onClick={this.props.facebookLoginDispatcher}>
              <i className="fi-social-facebook"></i> Facebook
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startLoginDispatcher: () => dispatch(startLogin()),
  twitterLoginDispatcher: () => dispatch(twitterLogin()),
  facebookLoginDispatcher: () => dispatch(facebookLogin())
})

export { LoginPage }
export default connect( undefined, mapDispatchToProps )(LoginPage)