import storage from '../../utils/storage'

const state = {
    nickname: storage.get('Nickname') || ''
}

const mutations = {
    SET_NICKNAME(state, nickname) {
        state.nickname = nickname
    }
}

const actions = {
    login({ commit, dispatch }, nickname) {
        if (nickname != '') {
            commit('SET_NICKNAME', nickname)
            storage.set('Nickname', nickname)
            dispatch('loginForm/hide', null, { root: true })
            dispatch('loading/show', { text: '登录中', time: 3 }, { root: true }).then(() => {
                dispatch('desktop/show', null, { root: true })
            })
        }
    },
    logout({ commit, dispatch }) {
        commit('SET_NICKNAME', '')
        storage.del('Nickname')
        dispatch('desktop/hide', null, { root: true })
        dispatch('loginForm/show', null, { root: true })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
