const io = require("socket.io-client")
const SocketManager = require("./SocketManager.js")
const GameDataManager = require("./GameDataManager.js")
const UIManager = require("./UIManager.js")
const Terminal = require("./Terminal.js")

const socketManager = new SocketManager(io)
const gameDataManager = new GameDataManager()
const uiManager = new UIManager()
const term = new Terminal()

let gameStarted = false

term.echo("Arone Susau 2020 - www.aronesusau.com<br><br>Please enter your characters name..<br>")

window.onload = _ => {
    term.command(cmd => {
        if (!gameStarted) {
            socketManager.setTerminal(term)
            socketManager.start(cmd)
            socketManager.registerEvents(gameDataManager, uiManager)

            uiManager.setMap(gameDataManager.defaultMap)
            uiManager.createMap()
            uiManager.startFrame(gameDataManager)
        }

        if (gameStarted) {
            const cmdSplit = cmd.split(" ")
            const action = cmdSplit[0]
            cmdSplit.shift()
            const content = cmdSplit.join(" ")

            switch (action) {
                case "/chat":
                    term.echo(`You: ${content}`)
                    socketManager.socket.emit("room:chat", content)
                    break
                case "/debug":
                    debug(gameDataManager)
                    break
                default:
                    socketManager.socket.emit('client:command', cmd)
            }
        }

        gameStarted = true
    })
}

function debug(gameDataManager) {
    console.dir(gameDataManager)
}

