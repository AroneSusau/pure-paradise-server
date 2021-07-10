import {PureParadise} from './PureParadise'
import {Socket} from 'socket.io'
import { Logger } from './util/Logger'

const config = require('config')
const express = require('express')
const app = express()
const ppv2 = new PureParadise()
const http = require('http').createServer(app)
const port = config.get('web.port')
const io = require('socket.io')(http, {
    ...config.get('web')
})

global["ppv2"] = ppv2;

console.log('\nRUNNING TEST TEMP PROJECT\n')

io.on('connect', (socket: Socket) => {
    ppv2.connect(socket)
})

http.listen(port, () => {
    Logger.success(`Listening on port ${port}!`)
})
