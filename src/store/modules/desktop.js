const state = {
    show: false,
    width: 0,
    height: 0
}

const mutations = {
    SET_SHOW(state, show) {
        state.show = show
    },
    SET_WIDTH(state, width) {
        state.width = width
    },
    SET_HEIGHT(state, height) {
        state.height = height
    }
}

const actions = {
    show({ commit }) {
        commit('SET_SHOW', true)
    },
    hide({ commit }) {
        commit('SET_SHOW', false)
    },
    setSize({ commit }, { width, height }) {
        commit('SET_WIDTH', width)
        commit('SET_HEIGHT', height)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
