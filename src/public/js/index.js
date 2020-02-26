const io = require("socket.io-client")
const SocketManager = require("./SocketManager.js")
const GameDataManager = require("./GameDataManager.js")
const UIManager = require("./UIManager.js")

const socketManager = new SocketManager(io)
const gameDataManager = new GameDataManager()
const uiManager = new UIManager()

const term = $("#terminal")

let gameStarted = false

$(function () {
    term.terminal(function (cmd, term) {

        if (!gameStarted) {
            socketManager.setTerminal(term)
            socketManager.start(cmd)
            socketManager.registerEvents(gameDataManager, uiManager)

            uiManager.setMap(gameDataManager.defaultMap)
            uiManager.createMap()
            uiManager.startFrame(gameDataManager)
        }

        if (gameStarted) {


            if (cmd.substr(0, 5) === "/chat") {
                socketManager.socket.emit("room:chat", cmd.substr(6))
            } else socketManager.socket.emit('client:command', cmd)
        }

        gameStarted = true

    }, {
        greetings: function (callback) {
            var text = `[[gb;#00FF41;]Arone Susau 2020 - www.aronesusau.com\n\nPlease enter your characters name..\n]`;

            callback(text);
        },
        onStart: function () {

        },
        prompt: "[[gb;green;]>>> ]",
        wrap: true
    });
})


