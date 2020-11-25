const state = {
  image: 'default',
};

const mutations = {
  SET_BACKGROUND(state, image) {
    state.image = image;
  },
};

const actions = {
  setBackground({ commit }, image) {
    commit('SET_BACKGROUND', image);
  },
  resetBackground({ commit }) {
    commit('SET_BACKGROUND', 'default');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
