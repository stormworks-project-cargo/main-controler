var express = require('express')
var app = express()

var speed = 0

app.get('/get', function (req, res) {
    console.log('get')
    res.status(200).send(speed.toString())
})

app.get('/set', function (req, res) {
    console.log('set')
    if(req.query.speed){
        speed = req.query.speed
        res.status(200).send(true)
    } else {
        res.status(200).send(false)
    }
})
  
app.listen(3000)
console.log('listening on port 3000')