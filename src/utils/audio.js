const audio = {
  /**
   * @type HTMLAudioElement
   */
  instance: null,
  init() {
    if (this.instance === null) {
      this.instance = new Audio();
      const volume = parseInt(localStorage.getItem('mcVolume')) || 50;
      this.setVolume(volume);
    }
  },
  onProgress(f) {
    this.instance.ontimeupdate = f;
  },
  onEnded(f) {
    this.instance.onended = f;
  },
  setVolume(v) {
    this.instance.volume = v / 100;
  },
  setSrc(src) {
    this.instance.src = src;
  },
  setProgress(current) {
    this.instance.currentTime = current;
  },
  play() {
    return this.instance.play();
  },
  pause() {
    this.instance.pause();
  },
};

audio.init();

export default audio;
