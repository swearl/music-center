import storage from '../../utils/storage'
import audio from '../../utils/audio'

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
        audio.volume(volume)
        storage.set('MusicVolume', volume)
    },
    setProgress({ state }, progress) {
        if (state.playing.duration) {
            const t = Math.floor((state.playing.duration * progress) / 100)
            audio.setProgress(t)
        }
    },
    setPlaying({ commit, state, dispatch }, playing) {
        audio.volume(state.volume)
        audio.set(playing.src)
        audio.progress(({ target }) => {
            const { currentTime, duration } = target
            playing.current = Math.floor(currentTime)
            playing.duration = Math.floor(duration)
            playing.progress = Math.round((playing.current / playing.duration) * 100)
            commit('SET_PLAYING', playing)
            if (playing.cover) {
                dispatch('background/setCover', playing.cover, { root: true })
            }
            storage.setJSON('MusicPlaying', playing)
        })
        audio.ended(() => {
            const playing = {}
            commit('SET_PLAYING', playing)
            storage.setJSON('MusicPlaying', playing)
            dispatch('background/setCover', '', { root: true })
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
