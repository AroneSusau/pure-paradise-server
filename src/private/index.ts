import {Socket} from 'socket.io'

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, '../public/')))

http.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

io.on('connection', function (socket: Socket) {

    socket.on('cats', msg => {
        console.log(msg)
    })

})
