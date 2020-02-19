const socket = io()

document.getElementById('submit').onclick = () => {
    const input = document.querySelector('input')

    socket.emit('command', input.value)

    input.value = ''
}

socket.on('result', (msg: string) => {
    console.log(msg)
})

socket.on('ping', (msg: string) => {
    socket.emit('pong', 'Loud and clear')
})