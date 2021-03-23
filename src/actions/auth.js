import { firebase, googleAuthProvider, twitterAuthProvider } from "../firebase/firebase"

const login = uid => ({
  type: "LOGIN",
  uid
})

const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

const twitterLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(twitterAuthProvider)
  }
}

const logout = _ => ({
  type: "LOGOUT",
})

const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}

export { login, startLogin, twitterLogin, logout, startLogout }