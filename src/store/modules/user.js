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
    setNickname({ commit, dispatch }, nickname) {
        if (nickname != '') {
            commit('SET_NICKNAME', nickname)
            storage.set('Nickname', nickname)
            dispatch('loginForm/hide', null, { root: true })
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
