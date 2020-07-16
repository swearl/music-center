import storage from '../../utils/storage'

const state = {
    name: 'chat',
    zIndex: storage.getJSON('Chat')['z'] || 10,
    x: storage.getJSON('Chat')['x'] || 0,
    y: storage.getJSON('Chat')['y'] || 0,
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
    SET_ZINDEX(state, zIndex) {
        state.zIndex = zIndex
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
        const z = state.zIndex
        storage.setJSON('Chat', { x, y, z })
    },
    setZIndex({ commit, state }, z) {
        commit('SET_ZINDEX', z)
        const { x, y } = state
        storage.setJSON('Chat', { x, y, z })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
