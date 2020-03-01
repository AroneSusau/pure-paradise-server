module.exports = class Terminal {

    start() {

    }

    echo(text) {
        const terminal = document.getElementById("terminal")
        const div = document.createElement("div")

        div.className = "terminalText"
        div.innerHTML = text

        terminal.appendChild(div)
        terminal.scrollTop = terminal.scrollHeight
    }

    command(callback) {
        window.onkeydown = e => {
            const cmd = document.querySelector("input")

            if (cmd.value !== "" && e.key === "Enter") {
                callback(cmd.value)
                cmd.value = ""
            }
        }
    }


}
