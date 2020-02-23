const {MapParser} = require("./MapParser.js")

const gameData = {
    mapOriginal: [],
    mapRaw: [],
    mapParsed: []
}

function battleUpdate(flag, response, term) {
    if (flag) {
        console.log("Its a battle")
    }
    jumpToBottomScroll()
}

function contextUpdate(flag, response, term) {
    if (flag) {
        console.log("Its a context")
    }
    jumpToBottomScroll()
}

function eventUpdate(flag, response, term) {
    if (flag) {
        console.log("Its a event")
    }
    jumpToBottomScroll()
}

function generalUpdate(flag, response, term) {
    if (flag) {
        console.log("Its a general")

        term.echo(response.general.text)
    }
    jumpToBottomScroll()
}

function mapUpdate(flag, response, term) {
    if (flag) {
        const map = document.getElementById("map")
        const mapParsed = MapParser(response.map.raw)

        gameData.mapOriginal = response.map.raw
        gameData.mapRaw = response.map.raw
        gameData.mapParsed = mapParsed

        map.innerHTML = mapParsed.reduce((t, c, i) => {
            const lineBreak = i % 20 === 0 ? "<br>" : ""
            return t + lineBreak + c
        })
    }
    jumpToBottomScroll()
}

function playerUpdate(flag, response, term) {
    if (flag) {
        if (response.player.flags.inventoryUpdate) {

        } else if (response.player.flags.equippedUpdate) {

        } else if (response.player.flags.statsUpdate) {

        } else if (response.player.flags.coordsUpdate) {
            gameData.mapRaw = Array.from(gameData.mapOriginal)
            gameData.mapRaw[response.player.coords.localIndex] = 89

            const map = document.getElementById("map")
            const mapParsed = MapParser(gameData.mapRaw)

            gameData.mapParsed = mapParsed

            map.innerHTML = mapParsed.reduce((t, c, i) => {
                const lineBreak = i % 20 === 0 ? "<br>" : ""
                return t + lineBreak + c
            })
        }
    }
    jumpToBottomScroll()
}

function error(flag, response, term) {
    if (flag) {
        term.echo(response.error.message)
    }
    jumpToBottomScroll()
}

function jumpToBottomScroll() {
    const div = document.querySelector(".terminalContainer")

    div.scrollTop = div.scrollHeight;
}

module.exports = {
    battleUpdate,
    contextUpdate,
    eventUpdate,
    generalUpdate,
    mapUpdate,
    playerUpdate,
    error: error
}
