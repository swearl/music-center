const state = {
    show: false,
    width: 0,
    height: 0,
    apps: {
        chat: true,
        music: true,
    },
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
    },
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
    },
    setFocus({ state, rootState, dispatch }, app) {
        var z = 0,
            max = 10
        for (var k in state.apps) {
            if (k !== app) {
                z = rootState[k].zIndex
                if (z > 10) {
                    z--
                }
                max = max < z ? z : max
                dispatch(`${k}/setZIndex`, z, { root: true })
            }
        }
        max++
        dispatch(`${app}/setZIndex`, max, { root: true })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
