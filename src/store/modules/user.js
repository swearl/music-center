import storage from '../../utils/storage'
import server from '../../utils/server'

const state = {
    nickname: storage.get('Nickname') || '',
}

const mutations = {
    SET_NICKNAME(state, nickname) {
        state.nickname = nickname
    },
}

const actions = {
    login({ commit, dispatch }, nickname) {
        if (nickname != '') {
            commit('SET_NICKNAME', nickname)
            storage.set('Nickname', nickname)
            dispatch('loginForm/hide', null, { root: true })
            dispatch('loading/show', { text: '登录中' }, { root: true }).then(() => {
                console.log('connect')
                server.open()
                server.on('connect', () => {
                    server.emit('login', { nickname })
                    console.log('connected')
                    dispatch('loading/hide', null, { root: true })
                    dispatch('desktop/show', null, { root: true })
                    // dispatch('music/play', null, { root: true })
                })
            })
        }
    },
    logout({ commit, dispatch }) {
        commit('SET_NICKNAME', '')
        storage.del('Nickname')
        server.close()
        console.log('disconnected')
        dispatch('desktop/hide', null, { root: true })
        dispatch('loginForm/show', null, { root: true })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
