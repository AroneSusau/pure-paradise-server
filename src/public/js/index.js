const io = require("socket.io-client")
const methods = require("./methods")

const socket = io()

const term = $("#terminal")
let toz

$(function () {
    term.terminal(function (cmd, term) {

        toz = term
        socket.emit('command', cmd)

    }, {
        greetings: function (callback) {
            var text = `[[gb;#00FF41;]Arone Susau 2020 - www.aronesusau.com\n\nPlease enter your characters name..\n]`;

            callback(text);
        },
        prompt: "[[gb;green;]>>> ]",
        wrap: true

    });
})

socket.on('result', (result) => {
    methods.battleUpdate(result.flags.battleUpdate, result, toz)
    methods.contextUpdate(result.flags.contextUpdate, result, toz)
    methods.eventUpdate(result.flags.eventUpdate, result, toz)
    methods.generalUpdate(result.flags.generalUpdate, result, toz)
    methods.mapUpdate(result.flags.mapUpdate, result, toz)
    methods.playerUpdate(result.flags.playerUpdate, result, toz)
    methods.error(result.flags.error, result, toz)
})

socket.on('ping', (msg) => {
    socket.emit('pong', 'Loud and clear')
})
