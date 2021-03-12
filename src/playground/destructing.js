// const person = {
//   name: "Rac",
//   age: 34,
//   location: {
//     city: "Tokyo",
//     temp: 18
//   }
// }

// // console.log(`${person.name} is ${person.age}.`)

// // const name = person.name
// // const age = person.age
// // console.log(`${name} is ${age}.`)

// const {name,age} = person
// console.log(`${name} is ${age}.`)

// const {city,temp:aaa} = person.location
// console.log(`It's ${aaa} in ${city}`)

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "penguin"
//   }
// }

// const {name:publisherName = "Self-Published"} = book.publisher
// console.log(publisherName)

// const address = ["Ome Street","West Tokyo","Japan","2020012"]
// console.log(`You are in ${address[1]} ${address[2]}`)

// const [street,city,state,zip,name="Rac"] = address
// console.log(`You are in ${city} ${state} ${name}`)

const item = ["Coffee(hot)","$2.00","$2.50","$2.75"]
const [ itemName,,mediumPrice, ] = item

console.log(`A medium ${itemName} costs ${mediumPrice}.`)