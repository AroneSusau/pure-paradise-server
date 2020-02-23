const key = new Map()

key.set(0, "**")
key.set(1, "~~")
key.set(2, "^^")
key.set(3, "..")
key.set(4, "||")
key.set(5, "__")
key.set(6, "--")
key.set(7, "[[")
key.set(8, "]]")
key.set(9, "++")
key.set(10, "//")
key.set(11, "\\\\")
key.set(12, "==")
key.set(13, "<span id='objective'>??</span>")
key.set(73, "D ")
key.set(76, "G ")
key.set(84, "O ")
key.set(88, "S ")
key.set(89, "<span id='player'>PP</span>")

const MapParser = (raw) => {
    return raw.map(value => {
        return key.get(value)
    })
}

module.exports = {MapParser}










