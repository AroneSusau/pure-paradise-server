const {MapParser, key} = require("./MapParser.js")

const gameData = {
    mapOriginal: [],
    mapRaw: [],
    mapParsed: [],
    mapId: null,
    playerId: '',
    playersInRoom: new Map()
}

function battleUpdate(response, terminal) {
    console.log("Its a battle")

}

function contextUpdate(response, terminal) {
    console.log("Its a context")

}

function eventUpdate(response, terminal) {
    console.log("Its a event")

}

function mapUpdate(response, terminal) {
    gameData.mapId = response.player.coords.globalIndex
    gameData.mapOriginal = Array.from(response.map.raw)
    gameData.mapRaw = Array.from(response.map.raw)

    const mapParsed = MapParser(response.map.raw)
    gameData.mapParsed = Array.from(mapParsed)

    removeClassname('.objective')
    removeClassname('.player')
    removeClassname('.otherPlayer')

    for (let i = 0; i < 400; i++) {
        const node = document.getElementById(`mapNode${i}`)
        if (node.tagName === "SPAN") {
            const newNode = document.createTextNode(mapParsed[i])

            if (gameData.mapRaw[i] === 13)
                node.className = "objective"

            node.removeChild(node.childNodes[0])
            node.appendChild(newNode)
        }
    }

    gameData.playersInRoom.forEach((player,) => {
        if (player.globalIndex === response.map.id) {
            const span = document.getElementById(`mapNode${player.localIndex}`)
            span.removeChild(span.childNodes[0])
            span.appendChild(document.createTextNode(key.get(89)))
            span.className = 'otherPlayer'

            gameData.mapRaw[player.localIndex] = 89
            gameData.mapParsed[player.localIndex] = key.get(89)
        }
    })
}

function removeClassname(className) {
    const element = document.querySelector(className)
    if (element != null)
        element.className = ''
}

function worldMovement(response) {
    if (response.mapId === gameData.mapId && gameData.playerId !== response.id) {
        const playerIndex = response.location.index

        if (response.type === 0) {
            gameData.mapRaw[playerIndex] = 89
            gameData.mapParsed[playerIndex] = key.get(89)

            const span = document.getElementById(`mapNode${playerIndex}`)
            const newNode = document.createTextNode(key.get(89))

            span.removeChild(span.childNodes[0])
            span.appendChild(newNode)

            span.className = "otherPlayer"

            console.log(response.id)

            const prevIndex = gameData.playersInRoom.get(response.id).localIndex
            const prev = document.getElementById(`mapNode${prevIndex}`)
            removePreviousLocation(prev, response)
        }
    }

    if (response.mapId !== gameData.mapId) {

    }

    gameData.playersInRoom.get(response.id).localIndex = playerIndex
    gameData.playersInRoom.get(response.id).globalIndex = response.mapId
}

function removePreviousLocation(prev, response) {
    if (prev !== null) {
        const idIndex = prev.id.replace("mapNode", "")
        const original = key.get(gameData.mapOriginal[Number.parseInt(idIndex)])
        const replaceNode = document.createTextNode(original)

        prev.className = ""
        prev.removeChild(prev.childNodes[0])
        prev.appendChild(replaceNode)
    }
}

function playerUpdate(response, terminal) {
    if (response.player.flags.inventoryUpdate) {

    } else if (response.player.flags.equippedUpdate) {

    } else if (response.player.flags.statsUpdate) {

    } else if (response.player.flags.coordsUpdate) {
        const playerIndex = response.player.coords.localIndex

        gameData.mapRaw[playerIndex] = 89
        gameData.mapParsed[playerIndex] = key.get(89)

        const span = document.getElementById(`mapNode${playerIndex}`)
        const newNode = document.createTextNode(key.get(89))

        const  prev = document.querySelector(".player")
        removePreviousLocation(prev, response)

        span.removeChild(span.childNodes[0])
        span.appendChild(newNode)

        span.className = "player"
    }

}

function generalUpdate(response, terminal) {
    terminal.echo(response.general.text)
}

function error(response, terminal) {
    console.log("error hit")
    terminal.echo(response.error.message, {newline: true})
}

function setPlayerId(id) {
    gameData.playerId = id
}

function generateMap() {
    const map = document.getElementById("map")
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < 400; i++) {
        const span = document.createElement("span")
        const breakLine = document.createElement("br")
        span.id = `mapNode${i}`
        span.appendChild(document.createTextNode(".."))
        span.className = ""

        if (i % 20 === 0 && i !== 0)
            fragment.appendChild(breakLine)

        fragment.appendChild(span)
    }
    map.append(fragment)
}

function playerJoinedRoom(response, terminal) {
    gameData.playersInRoom.set(response.id, new LocalPlayer(
        response.id,
        response.name,
        response.location.index,
        response.mapId
    ))

    terminal.echo(response.message)
    bottomScroll()
}

function startDump(response) {
    if (response.playerKeys.length > 0) {
        for (let i = 0; i < response.playerKeys.length; i++) {
            const split = response.playerKeys[i].split("::")
            const id = split[0]
            const name = split[1]
            const localIndex = response.playerLocalIndexes[i]
            const globalIndex = response.playerGlobalIndexes[i]

            gameData.playersInRoom.set(id, new LocalPlayer(
                id,
                name,
                localIndex,
                globalIndex
            ))

            console.log(localIndex, ":", response.location.localIndex)

            if (localIndex !== response.location.localIndex) {
                console.log("startDump HIT: ", localIndex)
                const span = document.getElementById(`mapNode${localIndex}`)

                gameData.mapRaw[localIndex] = 89
                gameData.mapParsed[localIndex] = key.get(89)

                span.removeChild(span.childNodes[0])
                span.appendChild(document.createTextNode(key.get(89)))
                span.className = 'otherPlayer'
            }
        }
    }
}

function playerLeftRoom(response, terminal) {
    removePreviousLocation(document.getElementById(`mapNode${response.location.index}`), response)

    gameData.playersInRoom.delete(response.id)
    terminal.echo(response.message)
    bottomScroll()
}

function bottomScroll() {
    const div = document.querySelector(".terminalContainer")
    div.scrollTop = div.scrollHeight;
}

class LocalPlayer {

    constructor(id, name, localIndex, globalIndex) {
        this.id = id;
        this.name = name;
        this.localIndex = localIndex;
        this.globalIndex = globalIndex;
    }
}

module.exports = {
    battleUpdate,
    contextUpdate,
    eventUpdate,
    mapUpdate,
    playerUpdate,
    error,
    generalUpdate,
    worldMovement,
    generateMap,
    setPlayerId,
    playerJoinedRoom,
    playerLeftRoom,
    bottomScroll,
    startDump
}
