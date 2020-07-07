import storage from '../../utils/storage'

const state = {
    name: 'music',
    zIndex: 10,
    x: storage.getJSON('Music')['x'] || 0,
    y: storage.getJSON('Music')['y'] || 0,
    width: 0,
    height: 0,
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
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}