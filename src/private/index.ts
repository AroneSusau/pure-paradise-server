import {Socket} from 'socket.io'
import {GameEngine} from './app/gameEngine/GameEngine.js'

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000
const path = require('path')

const userGames = new Map<String, GameEngine>()

app.use(express.static(path.join(__dirname, '../public/')))

http.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})

io.on('connection',  (socket: Socket) => {
    userGames.set(socket.id, new GameEngine())

    socket.on('command', cmd => {

        socket.emit('result', 'yes, you work')
    })

})

io.on("disconnected", (socket: Socket) => {
    userGames.delete(socket.id)
})
