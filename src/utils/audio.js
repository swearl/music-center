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
    // progress({target}) {
    //     let {currentTime, duration} = target,
    //     current = Math.floor(currentTime),
    //     duration = Math.floor(duration),
    //     progress =
    //     console.log(e)
    // },
    set(src) {
        this.instance.src = src
    },
    play() {
        this.instance.play()
    },
}

audio.init()

export default audio
