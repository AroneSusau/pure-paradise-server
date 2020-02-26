module.exports = class MapParser {

    constructor() {
        this.key = new Map()

        this.key.set(0, "**")
        this.key.set(1, "~~")
        this.key.set(2, "^^")
        this.key.set(3, "..")
        this.key.set(4, "||")
        this.key.set(5, "__")
        this.key.set(6, "--")
        this.key.set(7, "[[")
        this.key.set(8, "]]")
        this.key.set(9, "++")
        this.key.set(10, "//")
        this.key.set(11, "\\\\")
        this.key.set(12, "==")
        this.key.set(13, "??")
        this.key.set(14, "00")
        this.key.set(15, "@@")
        this.key.set(16, ">>")
        this.key.set(17, ">>")
        this.key.set(18, "<<")
        this.key.set(20, "))")
        this.key.set(21, "((")
        this.key.set(73, "D ")
        this.key.set(76, "G ")
        this.key.set(84, "O ")
        this.key.set(88, "S ")
        this.key.set(89, "PP")
        this.key.set(90, "PP")
    }

    parse(raw) {
        return raw.map(value => {
            return this.key.get(value)
        })
    }
}










