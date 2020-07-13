import storage from '../../utils/storage'

const state = {
    image: storage.get('BackgroundImage') || 'default',
    style: storage.get('BackgroundStyle') || 'default',
    blur: false,
    useCover: false,
}

const mutations = {
    SET_BACKGROUND(state, image = 'default') {
        state.image = image
    },
    SET_STYLE(state, style) {
        state.style = style
    },
    SET_BLUR(state, blur) {
        state.blur = blur
    },
    SET_USER_COVER(state, useCover) {
        state.useCover = useCover
    },
}

const actions = {
    setBackground({ commit }, image) {
        commit('SET_BACKGROUND', image)
        storage.set('BackgroundImage', image)
    },
    setStyle({ commit }, style) {
        commit('SET_STYLE', style)
        storage.set('BackgroundStyle', style)
    },
    setBlur({ commit }, blur) {
        commit('SET_BLUR', blur)
    },
    setCover({ commit }, image = '') {
        if (image === '') {
            commit('SET_BLUR', false)
            commit('SET_USER_COVER', false)
            commit('SET_BACKGROUND', 'default')
        } else {
            commit('SET_BLUR', true)
            commit('SET_USER_COVER', true)
            commit('SET_BACKGROUND', image)
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
