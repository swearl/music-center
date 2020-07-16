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
                        const online = onlineUsers.filter(user => user.sid != socketID)
                        dispatch('setOnline', online)
                    })
                    console.log('connected')
                    dispatch('loading/hide', null, { root: true })
                    dispatch('desktop/show', null, { root: true })
                    // dispatch('music/play', null, { root: true })
                })
                server.on('joined', ({ nickname, socketID, status }) => {
                    dispatch('addOnline', { nickname, sid: socketID, status })
                })
                server.on('left', ({ socketID }) => dispatch('delOnline', socketID))
                server.on('user status', ({ socketID, status }) => dispatch('setOnlineStatus', { socketID, status }))
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
    setOnline({ commit }, online) {
        commit('SET_ONLINE', online)
    },
    addOnline({ dispatch, state }, user) {
        let online = state.online
        online.push(user)
        dispatch('setOnline', online)
    },
    delOnline({ dispatch, state }, socketID) {
        let online = state.online
        online = online.filter(user => user.sid !== socketID)
        dispatch('setOnline', online)
    },
    setOnlineStatus({ dispatch, state }, { socketID, status }) {
        let online = state.online
        online = online.map(user => {
            if (user.sid === socketID) {
                user.status = status
            }
            return user
        })
        dispatch('setOnline', online)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
