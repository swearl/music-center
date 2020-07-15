import io from 'socket.io-client'

const server = {
    url: 'http://swearl.asuscomm.com:42004',
    // url: 'http://localhost:42004',
    socket: null,
    init() {
        if (this.socket === null) {
            this.socket = io(this.url, {
                autoConnect: false,
            })
        }
    },
    emit(event, data, cb) {
        this.socket.emit(event, data, cb)
    },
    connect() {
        this.socket.connect()
    },
    on(event, cb) {
        this.socket.on(event, res => cb(res))
    },
    playing() {
        this.socket.emit()
    },
}

server.init()

export default server
