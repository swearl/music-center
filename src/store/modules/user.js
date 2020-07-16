import storage from '../../utils/storage'
import server from '../../utils/server'

const state = {
    nickname: storage.get('Nickname') || '',
    status: '',
    socketID: null,
    online: [],
}

const mutations = {
    SET_NICKNAME(state, nickname) {
        state.nickname = nickname
    },
    SET_STATUS(state, status) {
        state.status = status
    },
    SET_SOCKET_ID(state, socketID) {
        state.socketID = socketID
    },
    SET_ONLINE(state, online) {
        state.online = online
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
                    server.emit('login', { nickname }, ({ socketID, onlineUsers }) => {
                        commit('SET_SOCKET_ID', socketID)
                        commit('SET_ONLINE', onlineUsers)
                    })
                    console.log('connected')
                    dispatch('loading/hide', null, { root: true })
                    dispatch('desktop/show', null, { root: true })
                    // dispatch('music/play', null, { root: true })
                })
                // server.on('joined',)
            })
        }
    },
    logout({ commit, dispatch }) {
        commit('SET_NICKNAME', '')
        commit('SET_SOCKET_ID', null)
        storage.del('Nickname')
        server.close()
        console.log('disconnected')
        dispatch('desktop/hide', null, { root: true })
        dispatch('loginForm/show', null, { root: true })
    },
    setStatus({ commit }, status) {
        commit('SET_STATUS', status)
        server.emit('user status', { status })
    },
    updateOnline({ commit }, online) {
        commit('SET_ONLINE', online)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
