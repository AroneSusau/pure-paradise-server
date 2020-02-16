import {Socket} from 'socket.io'
import {GameEngine} from './app/engine/concrete/GameEngine.js'
import {Player} from './app/character/concrete/Player.js'
import {Defaults} from './app/defaults/Defaults.js'

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000
const path = require('path')

const gameEngine = new GameEngine()
const players = new Map<string, Player>()
const defaults = new Defaults()

app.use(express.static(path.join(__dirname, '../public/')))

http.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})

io.on('connection',  (socket: Socket) => {

    players.set(socket.id, new Player(defaults))

    socket.on('command', cmd => {
        gameEngine.run(cmd, players.get(socket.id))

        socket.emit('result', cmd)
    })

})

io.on("disconnected", (socket: Socket) => {
    players.delete(socket.id)
})
