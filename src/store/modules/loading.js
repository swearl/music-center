const state = {
    show: false,
    text: ''
}

const mutations = {
    SET_SHOW(state, show) {
        state.show = show
    },
    SET_TEXT(state, text) {
        state.text = text
    }
}

const actions = {
    show({ commit, dispatch }, { text, time }) {
        if (text == '') {
            text = '加载中'
        }
        if (!time) {
            time = 0
        }
        return new Promise(resolve => {
            commit('SET_TEXT', text)
            commit('SET_SHOW', true)
            if (time > 0) {
                setTimeout(() => {
                    dispatch('hide')
                    resolve()
                }, time * 1000)
            } else {
                resolve()
            }
        })
    },
    hide({ commit }) {
        commit('SET_TEXT', '')
        commit('SET_SHOW', false)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
