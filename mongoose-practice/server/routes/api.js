const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post('/person', function (req, res) {
    let person = new Person(req.body)
    person.save()
    console.log(`${person} added`)
    res.end()
})

router.put('/person/:id', function (req, res) {
    Person.findByIdAndUpdate(req.params.id, {age: 80}, {new: true}, function (err, person) {
        console.log(`Update successful: ${person}`)
        res.end()
    })
})

router.delete('/apocalypse', function (req, res) {
    Person.find({}, function (err, people) {
        people.forEach(p => p.remove())
    })
    res.end()
})

module.exports = router