const socket = io()

socket.emit('cats', 'WEOW I WORK')

socket.on('cats', (msg: String) => {
    console.log(msg)
})
