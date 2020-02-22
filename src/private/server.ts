/**
 * Arone Tie Susau 2020
 */

import {PureParadise} from './index.js'
import {Socket} from 'socket.io'

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = process.env.PORT || 3000
const path = require('path')
const io = require('socket.io')(http, {
    pingTimeout: 60000,
    pingInterval: 60000
})

app.use(express.static(path.join(__dirname, '../public/')))

const pureParadise = new PureParadise()

const routers = [
    pureParadise
]

io.on('connection', (socket: Socket) => {
    routers.forEach(obj => {
        if (obj['connection'] != undefined)
            obj.connection(socket)
    })
})

io.on('disconnected', (socket: Socket) => {
    routers.forEach(obj => {
        if (obj['disconnected'] != undefined)
            obj.disconnected(socket)
    })
})

http.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})
