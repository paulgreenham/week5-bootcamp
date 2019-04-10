const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/solarsystemDB', {useNewUrlParser: true})

const Schema = mongoose.Schema

const systemSchema = new Schema ({
    planets: [{type: Schema.Types.ObjectId, ref: "Planet"}],
    starName: String
})

const planetSchema = new Schema ({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: "System"},
    visitors: [{type: Schema.Types.ObjectId, ref: "Visitor"}]
})

const visitorSchema = new Schema ({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: "Planet"},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: "Planet"}]
})


const System = mongoose.model("System", systemSchema)
const Planet = mongoose.model("Planet", planetSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)


// let s1 = new System ({
//     planets: [],
//     starName: "Rei"
// })

// let p1 = new Planet ({
//     name: "Shinron",
//     system: s1,
//     visitors: []
// })

// let p2 = new Planet ({
//     name: "Aquarion",
//     system: s1,
//     visitors: []
// })

// let p3 = new Planet ({
//     name: "Magistra",
//     system: s1,
//     visitors: []
// })

// let p4 = new Planet ({
//     name: "Aerion",
//     system: s1,
//     visitors: []
// })

// let v1 = new Visitor ({
//     name: "Katie",
//     homePlanet: p3,
//     visitedPlanets: [p3, p2, p1]
// })

// let v2 = new Visitor ({
//     name: "Jerome",
//     homePlanet: p3,
//     visitedPlanets: [p3, p2]
// })

// let v3 = new Visitor ({
//     name: "Jonathan",
//     homePlanet: p2,
//     visitedPlanets: [p2, p1]
// })

// let v4 = new Visitor ({
//     name: "Arianna",
//     homePlanet: p4,
//     visitedPlanets: [p4, p3]
// })

// let v5 = new Visitor ({
//     name: "Kajan",
//     homePlanet: p1,
//     visitedPlanets: [p1, p4]
// })

// s1.planets.push(...[p1, p2, p3, p4])
// p1.visitors.push(...[v1, v3])
// p2.visitors.push(v2)
// p3.visitors.push(v4)
// p4.visitors.push(v5)

// s1.save()
// p1.save()
// p2.save()
// p3.save()
// p4.save()
// v1.save()
// v2.save()
// v3.save()
// v4.save()
// v5.save()

// Visitor.findOne({name: "Katie"})
//     .populate("visitedPlanets")
//     .exec((err, visitor) => {
//         for(let planet of visitor.visitedPlanets){
//             console.log(planet.name)
//         }
//     })

// Planet.findOne({name: "Shinron"})
//     .populate("visitors")
//     .exec((err, planet) => {
//         for(let visitor of planet.visitors){
//             console.log(visitor.name)
//         }
//     })

// System.findOne({starName: "Rei"})
//     .populate({
//         path: "planets",
//         populate: {
//             path: "visitors"
//         }
//     })
//     .exec((err, system) => {
//         system.planets.forEach(p => p.visitors.forEach(v => console.log(v.name)))
//     })

// Visitor.findOne({name: "Arianna"})
//     .populate({
//         path: "homePlanet",
//         populate: {
//             path: "system"
//         }
//     })
//     .exec((err, visitor) => {
//         console.log(visitor.homePlanet.system.starName)
//     })

Planet.findOne({name: "Aquarion"})
    .populate("system visitors")
    .exec((err, planet) => {
        console.log(planet.system.starName)
        planet.visitors.forEach(v => console.log(v.name))
    })