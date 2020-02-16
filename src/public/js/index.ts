const socket = io()

socket.emit('command', 'WEOW I WORK')

socket.on('result', (msg: string) => {
    alert("wow")
    console.log(msg)
})
