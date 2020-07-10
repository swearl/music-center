import storage from '../../utils/storage'
import audio from '../../utils/audio'

// const progress = ({target}) => {
//     let {currentTime, duration} = target,
//         current = Math.floor(currentTime)
//     duration = Math.floor(duration),
//     const progress = Math.round(current/duration * 100)

// }

const state = {
    name: 'music',
    zIndex: 10,
    x: storage.getJSON('Music')['x'] || 0,
    y: storage.getJSON('Music')['y'] || 0,
    width: 0,
    height: 0,
    volume: storage.get('MusicVolume') || 50,
    playing: storage.getJSON('MusicPlaying') || { src: '', title: '', artist: '', cover: '', status: '' },
}

const mutations = {
    SET_WIDTH(state, width) {
        state.width = width
    },
    SET_HEIGHT(state, height) {
        state.height = height
    },
    SET_X(state, x) {
        state.x = x
    },
    SET_Y(state, y) {
        state.y = y
    },
    SET_VOLUME(state, volume) {
        state.volume = volume
    },
    SET_PLAYING(state, playing) {
        state.playing = playing
    },
}

const actions = {
    setSize({ commit }, { width, height }) {
        commit('SET_WIDTH', width)
        commit('SET_HEIGHT', height)
    },
    setPos({ commit }, { x, y }) {
        commit('SET_X', x)
        commit('SET_Y', y)
        storage.setJSON('Music', { x, y })
    },
    setVolume({ commit }, volume) {
        commit('SET_VOLUME', volume)
        storage.set('MusicVolume', volume)
    },
    setPlaying({ commit }, playing) {
        audio.set(playing.src)
        audio.progress(({ target }) => {
            const { currentTime, duration } = target
            playing.current = Math.floor(currentTime)
            playing.duration = Math.floor(duration)
            playing.progress = Math.round((playing.current / playing.duration) * 100)
            commit('SET_PLAYING', playing)
            storage.setJSON('MusicPlaying', playing)
        })
        audio.play()
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
