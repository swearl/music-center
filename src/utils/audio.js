const audio = {
    instance: null,
    init() {
        if (this.instance === null) {
            this.instance = new Audio()
            // this.instance.ontimeupdate = this.progress
        }
    },
    progress(f) {
        this.instance.ontimeupdate = f
    },
    ended(f) {
        this.instance.onended = f
    },
    volume(v) {
        this.instance.volume = v / 100
    },
    set(src) {
        this.instance.src = src
    },
    play() {
        this.instance.play()
    },
    setProgress(current) {
        this.instance.currentTime = current
    },
}

audio.init()

export default audio
