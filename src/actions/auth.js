import { firebase, googleAuthProvider, twitterAuthProvider, facebookAuthProvider } from "../firebase/firebase"

const auth = firebase.auth()

const login = uid => ({
  type: "LOGIN",
  uid
})

const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
    // .then(pop => {
    //   console.log(pop)
    //   console.log(`Welcome ${pop.user.displayName} / LoginAddress ${pop.user.email}`)
    //   console.log(`Locale ${pop.additionalUserInfo.profile.locale}`)
    //   console.log(`Welcome ${pop.additionalUserInfo.profile.family_name} ${pop.additionalUserInfo.profile.given_name}/ LoginAddress ${pop.user.email}`)
    //   console.log(pop.credential.signInMethod,pop.credential.providerId)
    // })

    .catch(error=>{
      if (error.code === 'auth/account-exists-with-different-credential') {
        const pendingCred = error.credential;
        const email = error.email;
        console.log("CL pendingCred Google",pendingCred)

        auth.fetchSignInMethodsForEmail(email).then(methods => {
          switch (methods[0]) {
            case "google.com":
              return firebase.auth().signInWithPopup(googleAuthProvider)
            case "facebook.com":
              return firebase.auth().signInWithPopup(facebookAuthProvider)
            case "twitter.com":
              return firebase.auth().signInWithPopup(twitterAuthProvider)
            default:
              return
          }
        })
      }
    })

  }
}

const twitterLogin = () => {
  return () => {
    return auth.signInWithPopup(twitterAuthProvider)
    // .then(pop => {
    //   console.log(pop)
    //   console.log(`Welcome ${pop.user.displayName} / LoginAddress ${pop.user.email}`)
    //   console.log(pop.credential.signInMethod,pop.credential.providerId)
    // })


    .catch(error=>{
      if (error.code === 'auth/account-exists-with-different-credential') {
        const pendingCred = error.credential;
        const email = error.email;
        console.log("CL pendingCred Twitter",pendingCred)

        auth.fetchSignInMethodsForEmail(email).then(methods => {
          switch (methods[0]) {
            case "google.com":
              return firebase.auth().signInWithPopup(googleAuthProvider)
            case "facebook.com":
              return firebase.auth().signInWithPopup(facebookAuthProvider)
            case "twitter.com":
              return firebase.auth().signInWithPopup(twitterAuthProvider)
            default:
              return
          }
        })
      }
    })

  }
}

const facebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider)

    // .then(pop => {
    //   console.log(pop)
    //   console.log(`Welcome ${pop.user.displayName} / LoginAddress ${pop.user.email}`)
    //   console.log(pop.credential.signInMethod,pop.credential.providerId)
    // })

    .catch(error=>{
      if (error.code === 'auth/account-exists-with-different-credential') {
        const pendingCred = error.credential;
        const email = error.email;
        console.log("CL pendingCred Facebook",pendingCred)

        auth.fetchSignInMethodsForEmail(email).then(methods => {
          switch (methods[0]) {
            case "google.com":
              return firebase.auth().signInWithPopup(googleAuthProvider)
            case "facebook.com":
              return firebase.auth().signInWithPopup(facebookAuthProvider)
            case "twitter.com":
              return firebase.auth().signInWithPopup(twitterAuthProvider)
            default:
              return
          }
        })
      }
    })

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

export { login, startLogin, twitterLogin, facebookLogin, logout, startLogout }