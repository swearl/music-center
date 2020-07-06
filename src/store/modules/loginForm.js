const state = {
    show: false,
}

const mutations = {
    SET_SHOW(state, show) {
        state.show = show
    },
}

const actions = {
    show({ commit }) {
        commit('SET_SHOW', true)
    },
    hide({ commit }) {
        commit('SET_SHOW', false)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
