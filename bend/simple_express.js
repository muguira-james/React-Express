var express = require('express')
var cors = require('cors')
var app = express()

var port = 9000


// as you can see from this structure the players are on hole {1, 2, 3, 4}
const players = {
    graph: [
    {FirstName: "Joan", LastName: "Jet", ID: 1, Hole: 1, HoleLocation: "TEE"},
    {FirstName: "Ruth", LastName: "Crist", ID: 2, Hole: 1, HoleLocation: "TEE"},
    {FirstName: "Beth", LastName: "Flick", ID: 3, Hole: 1, HoleLocation: "TEE"},
    {FirstName: "Julie", LastName: "Ant", ID: 4, Hole: 1, HoleLocation: "FWY"},
    {FirstName: "Ginny", LastName: "Grey", ID: 5, Hole: 1, HoleLocation: "FWY"},
    {FirstName: "Paula", LastName: "Lamb", ID: 6, Hole: 1, HoleLocation: "GRN"},
    {FirstName: "Ingid", LastName: "Jones", ID: 7, Hole: 2, HoleLocation: "TEE"},
    {FirstName: "Kelly", LastName: "Smith", ID: 8, Hole: 2, HoleLocation: "FWY"},
    {FirstName: "Eilean", LastName: "Rams", ID: 9, Hole: 2, HoleLocation: "GRN"},
    {FirstName: "Barb", LastName: "Sharp", ID: 10, Hole: 4, HoleLocation: "FWY"},
    {FirstName: "Carol", LastName: "Adams", ID: 11, Hole: 4, HoleLocation: "FWY"},
    {FirstName: "Faith", LastName: "Hope", ID: 12, Hole: 4, HoleLocation: "GRN"}
  ]
}

app.use(cors())

app.use(express.static('public'))

app.get('/api/players', (request, response) => {
    // console.log("players...", JSON.stringify(players))
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(players))
})

app.listen(9000, () => {
    console.log(`app listening on port ${port}`)
})