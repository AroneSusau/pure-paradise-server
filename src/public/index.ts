const socket = io()

socket.emit('command', 'WEOW I WORK')

socket.on('result', (msg: String) => {
    alert("wow")
    console.log(msg)
})
