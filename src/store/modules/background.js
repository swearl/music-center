import storage from '../../utils/storage'

const state = {
    image: storage.get('BackgroundImage') || 'default',
    style: storage.get('BackgroundStyle') || 'default'
}

const mutations = {
    SET_BACKGROUND(state, image) {
        state.image = image
    },
    SET_STYLE(state, style) {
        state.style = style
    }
}

const actions = {
    setBackground({ commit }, image, style = 'default') {
        commit('SET_BACKGROUND', image)
        commit('SET_STYLE', style)
        storage.set('BackgroundImage', image)
        storage.set('BackgroundStyle', style)
    }
}

export default {
    state,
    mutations,
    actions
}
