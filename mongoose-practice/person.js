const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', {useNewUrlParser: true})

const Schema = mongoose.Schema


const addressSchema = new Schema({
        city: String,
        street: String,
        apartment: Number
    })
    
const personSchema = new Schema({
        firstName: { type: String, required: true },
        lastName: String,
        age: Number,
        address: addressSchema
    })
        
// const computerSchema = new Schema({
//     maker: String,
//     price: Number
// })

// const Computer = mongoose.model('Computer', computerSchema)

const Person = mongoose.model("Person", personSchema)

// let c3 = new Computer({
//     maker: "HP",
//     price: 1300
// })

// let c4 = new Computer({
//     maker: "Dell",
//     price: 1500
// })

// c3.save()
// c4.save()

// let p1 = new Person({
//     firstName: "David",
//     lastName: "Smith",
//     age: 25
// })

// console.log(p1)

// p1.save()

let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

let allTheShooberts = [p2, p3, p4, p5]
allTheShooberts.forEach(s => s.save())

// Person.findByIdAndUpdate("5caaf89f90131b2e78ce0d91", { age: 65 }, {new: true}, function (err, person) {
//     console.log(person)
// })

// Person.find({age: {$gt: 30}}, function (err, people) {
//     for(let person of people) {
//         person.firstName = "Treboohs"
//         person.save()
//     }
//     console.log(people)
// })

// Person.find({}, function (err, people) {
//     console.log(people)
// })