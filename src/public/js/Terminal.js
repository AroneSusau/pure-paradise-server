module.exports = class Terminal {

    start() {

    }

    echo(text, classes) {
        const terminal = document.getElementById("terminal")
        const div = document.createElement("div")

        div.className = `terminal-text`
        div.innerHTML = `<span class="console-input">>>> </span><span class="terminal-span ${classes}">${text}</span>`

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
