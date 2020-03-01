const MapParser = require("./MapParser.js")
const mapParser = new MapParser()

module.exports = class UIManager {

    setMap(raw) {
        this.raw = raw
        this.parsed = mapParser.parse(raw)
        this.length = raw.length
        this.fps = 1000 / 30
    }

    createMap() {
        const map = document.getElementById("map")
        const frag = document.createDocumentFragment()

        for (let i = 0; i < this.length; i++) {
            const span = document.createElement('span')
            const text = document.createTextNode(this.parsed[i])

            if (i % 20 === 0)
                frag.appendChild(document.createElement("br"))

            span.id = `node${i}`

            span.appendChild(text)
            frag.appendChild(span)
        }

        map.appendChild(frag)
    }

    startFrame(gameDataManager) {
        setInterval(() => this.updateFrame(gameDataManager), this.fps);
    }

    updateFrame(gameDataManager) {
        this.refreshMap()
        this.drawPlayersPositions(gameDataManager)
        this.drawClientsPosition(gameDataManager)

    }

    drawClientsPosition(gameDataManager) {
        const localExists = gameDataManager.local !== undefined && gameDataManager.local >= 0

        if (localExists) {
            const span = document.getElementById(`node${gameDataManager.local}`)
            span.removeChild(span.childNodes[0])
            span.appendChild(document.createTextNode('PP'))
            span.className = 'player'
        }
    }

    drawPlayersPositions(gameDataManager) {
        gameDataManager.players.forEach(player => {
            const span = document.getElementById(`node${player.local}`)

            if (span.textContent === this.parsed[player.local] && gameDataManager.global === player.global) {
                span.removeChild(span.childNodes[0])
                span.appendChild(document.createTextNode('PP'))

                span.className = 'otherPlayer'
            }
        })
    }

    refreshMap() {
        for (let i = 0; i < this.length; i++) {
            const span = document.getElementById(`node${i}`)
            if (span.textContent !== this.parsed[i]) {
                span.removeChild(span.childNodes[0])
                span.appendChild(document.createTextNode(this.parsed[i]))
                span.className = ''
            }

            if (span.textContent === "??") {
                span.className = 'objective'
            }
        }
    }

}
