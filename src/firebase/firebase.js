import * as firebase from "firebase"
import expenses from "../tests/fixtures/expenses"

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export { firebase, googleAuthProvider, twitterAuthProvider, database as default }

// database.ref("expenses").on("child_removed",snapshot=>{
//   console.log("removed:",snapshot.key,snapshot.val())
// })

// database.ref("expenses").on("child_changed",snapshot=>{
//   console.log("changed:",snapshot.key,snapshot.val())
// })

// database.ref("expenses").on("child_added",snapshot=>{
//   console.log("added:",snapshot.key,snapshot.val())
// })

// database.ref("expenses")
//   .on("value",snapshot => {
//     const expensesArray = []
//     snapshot.forEach(cs => {
//       expensesArray.push({
//         id:cs.key,
//         ...cs.val()
//       })
//     })
//     console.log(expensesArray)
//   }
// )

// database.ref("expenses").once("value")
//   .then(snapshot=>snapshot.forEach(cs=>{
//     expensesArray.push({
//       id:cs.key,
//       ...cs.val()
//     })
//   }))
// console.log("create:",expensesArray)
// console.log("before:",expenses)

// database.ref().on("value",snapshot=>console.log(snapshot.val()))

// expenses.map(expense => {
//   const {description,note,amount,createdAt} = expense
//   database.ref("expenses").push({
//     description,
//     note,
//     amount,
//     createdAt
//   })
// })

// setTimeout(() => {
//   database.ref("notes/-MW2wnP7AT1ZPZaNcNP1/body").remove()
// }, 1000);

// setTimeout(() => {
//   database.ref("notes").push().set({
//     title:"First Note",
//     body: "This is my note"
//   })
// }, 1000);

// setTimeout(() => {
//   database.ref("notes").push().set({
//     title:"Second Note",
//     body: "This is my note"
//   })
// }, 2000);

// const firebaseNotes = {
//   notes:{
//     asasasd:{
//       title:"First Note",
//       body: "This is my note"
//     },
//     sserfar:{
//     title:"First Note",
//     body: "This is my note"
//     }
//   }
// }

// database.ref().set(firebaseNotes)
// database.ref("notes").once("value").then(snapshot=>console.log(snapshot.val()))

// database.ref().set({
//   name: "Yutaka Fujii",
//   age:34,
//   stressLevel: 6,
//   isSingle:false,
//   job:{
//     title:"software developer",
//     company: "Google"
//   },
//   location: {
//     city: "Tokyo",
//     country: "Japan"
//   }
// }).then(_=>console.log("Data is saved"))
// .catch(error=>console.log("error:",error))

// database.ref("attributes").set({
//   height:180,
//   weight:80
// }).then(_=>console.log("Data is saved2"))
// .catch(error=>console.log("error:",error))

// database.ref().set(null)

// database.ref("name").remove().then(_=>console.log("removed success!")).catch(e=>console.log(e))

// database.ref().update({
//   stressLevel:9,
//   "job/company":"Amazon",
//   "location/city":"Seattle"
// }).then(_=>console.log("update success!")).catch(e=>console.log(e))

// database.ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch(e=>console.log("Error fetching data: ",e))

// const onChange = (snapshot)=>console.log("onによる通知:",snapshot.val())

// setTimeout(() => {
//   database.ref().update({
//     age:34,
//   }).then(_=>console.log("3000ms later update success!")).catch(e=>console.log(e))
// }, 3000);

// setTimeout(() => {
//   console.log("on()スタート")
// }, 4000);

// setTimeout(() => {
//   database.ref("age").on("value",onChange)
// }, 4000);

// setTimeout(() => {
//   database.ref().update({
//     age:35,
//   }).then(_=>console.log("5000ms later update success!")).catch(e=>console.log(e))
// }, 5000);

// setTimeout(() => {
//   database.ref().update({
//     age:36,
//   }).then(_=>console.log("6000ms later update success!")).catch(e=>console.log(e))
// }, 6000);

// setTimeout(() => {
//   console.log("off()の実行")
//   database.ref("age").off("value",onChange)
// }, 7000);

// setTimeout(() => {
//   database.ref().update({
//     age:37,
//   }).then(_=>console.log("age:37 8000ms onによる通知が発生しないことを確認")).catch(e=>console.log(e))
// }, 8000);

// setTimeout(() => {
//   database.ref().update({
//     age:38,
//   }).then(_=>console.log("9000ms onによる通知が発生しないことを確認")).catch(e=>console.log(e))
// }, 9000);

// setTimeout(() => {
//   database.ref().once('value').then(snapshot=>console.log("onceによる通知",snapshot.val())).catch(e=>console.log(e))
// }, 10000);

// database.ref().update({
//   name:"fujii",
// }).then(_=>console.log("update success!")).catch(e=>console.log(e))

// const onMessage = snapshot => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }
// database.ref().on("value",onMessage)
// setTimeout(() => {
//   database.ref().update({"job/company":"Amazon"}).then(_=>console.log("3000ms onによる通知が発生しないことを確認")).catch(e=>console.log(e))
// }, 3000);
// setTimeout(() => {
//   database.ref().off("value",onMessage)
// }, 4000);
// setTimeout(() => {
//   database.ref().update({"job/title":"Manager"}).then(_=>console.log("5000ms onによる通知が発生しないことを確認")).catch(e=>console.log(e))
// }, 5000);

// database.ref().set(null)