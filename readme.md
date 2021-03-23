## About this project

This course is for 　[Udemy Course React-2nd-Edition](https://www.udemy.com/course/react-2nd-edition/)
Upload Sample is [Expensify](http://expensify.playwell.site/) (Not SSL)

## Changed Part

### react-modal 2.2.2 -> 3.12.1

Update when checking with Modal before deleting an expense item.
An error occurred when transitioning pages before the Modal appeared.
Now it is stable.

### Firebase version 4.2.0 -> 8.3.1

If the same email address is registered during SNS authentication, an error will occur.
As a workaround, I used [auth.fetchSignInMethodsForEmail(email)](https://firebase.google.com/docs/auth/web/google-signin#handling-account-exists-with-different-credential-errors).
This required an upgrade.
