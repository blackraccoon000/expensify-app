import * as firebase from "firebase"

const config = {
  apiKey: "AIzaSyDAkCKsO9uJviF_aVy-DLFh_0fkGWhV4cY",
  authDomain: "expensify-8811b.firebaseapp.com",
  databaseURL: "https://expensify-8811b-default-rtdb.firebaseio.com",
  projectId: "expensify-8811b",
  storageBucket: "expensify-8811b.appspot.com",
  messagingSenderId: "937375452957",
  appId: "1:937375452957:web:08fed7785478f52a4d9bf4"
};

firebase.initializeApp(config);

const database = firebase.database()

database.ref().set({
  name: "Yutaka Fujii",
  age:34,
  isSingle:false,
  location: {
    city: "Tokyo",
    country: "Japan"
  }
})

database.ref("age").set(27)
database.ref("location/city").set("aaa")
database.ref("attributes").set({
  height:180,
  weight:80
})