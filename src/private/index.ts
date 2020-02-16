import {Socket} from 'socket.io'
import {GameEngine} from './app/engine/concrete/GameEngine.js'
import {Player} from './app/character/concrete/Player.js'
import {Defaults} from './app/defaults/Defaults.js'
import {Observer} from './observer/Observer.js'

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = process.env.PORT || 3000
const path = require('path')
const io = require('socket.io')(http, {
    pingTimeout: 60000,
    pingInterval: 60000
})

const gameEngine = new GameEngine()
const observers = new Map<string, Observer>()
const players = new Map<string, Player>()
const defaults = new Defaults()

app.use(express.static(path.join(__dirname, '../public/')))

io.on('connection', (socket: Socket) => {
    const id = socket.id
    const player = new Player(id, defaults)
    const observer = new Observer(id, socket)

    players.set(id, player)
    observers.set(id, observer)
    gameEngine.subscribe(observer)

    socket.on('command', cmd => gameEngine.run(cmd, players.get(id)))

})

io.on('disconnected', (socket: Socket) => {
    players.delete(socket.id)
    gameEngine.unsubscribe(socket.id)
})

http.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})
