const io = require("socket.io-client")
const methods = require("./methods")

const socket = io()

const term = $("#terminal")
let terminal
let gameStarted = false

methods.generateMap()
methods.setPlayerId(socket.id)

$(function () {
    term.terminal(function (cmd, term) {

        terminal = term
        socket.emit('command', cmd)
        gameStarted = true

    }, {
        greetings: function (callback) {
            var text = `[[gb;#00FF41;]Arone Susau 2020 - www.aronesusau.com\n\nPlease enter your characters name..\n]`;

            callback(text);
        },
        prompt: "[[gb;green;]>>> ]",
        wrap: true

    });
})

socket.on('movement', response => {
    if (gameStarted) {
        methods.worldMovement(response)
    }
})

socket.on('result', response => {
    if (gameStarted) {
        for (const key in response.flags) {
            if (response.flags.hasOwnProperty(key) && response.flags[key])
                if (methods.hasOwnProperty(key))
                    methods[key](response, terminal)
        }

        methods.bottomScroll()
    }
})

socket.on('startDump', response => methods.startDump(response))
socket.on('playerJoinedRoom', response => methods.playerJoinedRoom(response, terminal))
socket.on('playerLeftRoom', response => methods.playerLeftRoom(response, terminal))

socket.on('ping', () => socket.emit('pong', 'Loud and clear'))
