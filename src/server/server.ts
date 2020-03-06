/**
 * Arone Tie Susau 2020
 */

import {PureParadise} from './PureParadise'
import {Socket} from 'socket.io'

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = process.env.PORT || 3000
const io = require('socket.io')(http, {
    pingTimeout: 60000,
    pingInterval: 60000
})

const pureParadise = new PureParadise()

const routers = [
    pureParadise
]

io.on('connect', (socket: Socket) => {
    routers.forEach(obj => {
        if (obj['connect'] != undefined)
            obj.connect(socket)
    })
})

http.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})
