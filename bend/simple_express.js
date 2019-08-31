require('dotenv').config()

var express = require('express')
var cors = require('cors')
var app = express()



import Player, { models } from './Player'
import mongoose from "mongoose";
var port = 9000


// as you can see from this structure the players are on hole {1, 2, 3, 4}
const players = {
    graph: [
        { FirstName: "Joan", LastName: "Jet", ID: 1, Hole: 1, HoleLocation: "TEE" },
        { FirstName: "Ruth", LastName: "Crist", ID: 2, Hole: 1, HoleLocation: "TEE" },
        { FirstName: "Beth", LastName: "Flick", ID: 3, Hole: 1, HoleLocation: "TEE" },
        { FirstName: "Julie", LastName: "Ant", ID: 4, Hole: 1, HoleLocation: "FWY" },
        { FirstName: "Ginny", LastName: "Grey", ID: 5, Hole: 1, HoleLocation: "FWY" },
        { FirstName: "Paula", LastName: "Lamb", ID: 6, Hole: 1, HoleLocation: "GRN" },
        { FirstName: "Ingid", LastName: "Jones", ID: 7, Hole: 2, HoleLocation: "TEE" },
        { FirstName: "Kelly", LastName: "Smith", ID: 8, Hole: 2, HoleLocation: "FWY" },
        { FirstName: "Eilean", LastName: "Rams", ID: 9, Hole: 2, HoleLocation: "GRN" },
        { FirstName: "Barb", LastName: "Sharp", ID: 10, Hole: 4, HoleLocation: "FWY" },
        { FirstName: "Carol", LastName: "Adams", ID: 11, Hole: 4, HoleLocation: "FWY" },
        { FirstName: "Faith", LastName: "Hope", ID: 12, Hole: 4, HoleLocation: "GRN" }
    ]
}

const { mongoURI: db } = process.env
console.log("db-->", db)
mongoose.connect(
    db, {
        useCreateIndex: true,
        useNewUrlParser: true
    }
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use(cors())

app.use(express.static('public'))

app.get('/api/players', (request, response) => {
    console.log("players...", JSON.stringify(players))
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(players))
})

app.get('/api/all', async (request, response) => {
    const players = await Player.find({}).populate().exec()

    let rt = []
    players.map(p => {
        let plr = {}
        plr.id = p.toString()
        plr.FirstName = p.FirstName
        plr.LastName = p.LastName
        plr.Hole = p.Hole
        plr.HoleLocation = p.HoleLocation

        rt.push(plr)
    })
    console.log("players...", JSON.stringify(rt))
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(rt))
})
app.get('/api/createPlayer', (request, response) => {
    const newPlayer = new Player({
        FirstName: "Justus",
        LastName: "Stull",
        Hole: 5,
        HoleLocation: "TEE"
    })

    return new Promise((resolve, reject) => {
        newPlayer.save((err, res) => {
            err ? reject(err) : resolve(res)
        })
    })

})

app.get('/api/create',  (request, response) => {
    console.log("populating players...")

    players.graph.map(el => {
        console.log("p-->", el)
        const plyr = new Player({
            FirstName: el.FirstName,
            LastName: el.LastName,
            Hole: el.Hole,
            HoleLocation: el.HoleLocation
        })
        plyr.save()
    })
    // console.log("players...", JSON.stringify(players))
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(players))
})
app.listen(9000, () => {
    console.log(`app listening on port ${port}`)
})