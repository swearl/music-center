import audio from '@/utils/audio';

const state = {
  playing: null,
  playlist: [],
  volume: parseInt(localStorage.getItem('mcVolume')) || 50,
};

const mutations = {
  SET_PLAYING(state, playing) {
    state.playing = playing;
  },
  SET_PLAYLIST(state, playlist) {
    state.playlist = playlist;
  },
  SET_VOLUME(state, volume) {
    state.volume = volume;
  },
};

const actions = {
  setPlaying({ commit, state, dispatch }, playing) {
    let playlist = state.playlist || [];
    const songIndex = playlist.findIndex((item) => item.server === playing.server && item.id === playing.id);
    const playingIndex = playlist.findIndex((item) => item.playing === true);
    playlist = playlist.map((item) => {
      item.playing = false;
      return item;
    });
    if (songIndex === -1) {
      if (playingIndex === -1) {
        playlist.splice(0, 0, { playing: true, ...playing });
      } else {
        playlist.splice(playingIndex, 0, { playing: true, ...playing });
      }
    } else {
      playlist[songIndex].playing = true;
    }
    dispatch('setPlaylist', playlist);
    commit('SET_PLAYING', playing);
    audio.setSrc(playing.url);
    audio.play();
    console.log(playlist, playing);
  },
  setPlaylist({ commit }, playlist) {
    commit('SET_PLAYLIST', playlist);
  },
  setVolume({ commit }, volume) {
    commit('state', volume);
    localStorage.setItem('mcVolume', volume);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
