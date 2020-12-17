// import Vue from 'vue';
import audio from '@/utils/audio';

const state = {
  playing: null,
  playlist: [],
  volume: parseInt(localStorage.getItem('mcVolume')) || 50,
};

const mutations = {
  SET_PLAYING(state, playing) {
    state.playing = { ...playing };
    // if (playing.current) {
    //   Vue.set(state.playing, 'current', playing.current);
    // }
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
    // commit('SET_PLAYING', playing);
    audio.setSrc(playing.url);
    audio.onProgress(({ target }) => {
      const { currentTime, duration } = target;
      playing.current = Math.floor(currentTime);
      playing.duration = Math.floor(duration);
      playing.progress = (playing.current / playing.duration) * 100;
      commit('SET_PLAYING', playing);
      // if (playing.pic) {
      //   dispatch('background/setCover', playing.pic, { root: true });
      // }
      // storage.setJSON('MusicPlaying', playing)
    });
    audio.onEnded(() => dispatch('playNext'));
    audio
      .play()
      .then(() => dispatch('background/setBackground', playing.pic, { root: true }))
      .catch(() => {
        setTimeout(dispatch('playNext'), 1000);
      });
    // console.log(playlist, playing);
  },
  setProgress({ state }, progress) {
    if (state.playing.duration) {
      const t = Math.floor((state.playing.duration * progress) / 100);
      audio.setProgress(t);
    }
  },
  setPlaylist({ commit }, playlist) {
    commit('SET_PLAYLIST', playlist);
  },
  setVolume({ commit }, volume) {
    audio.setVolume(volume);
    commit('SET_VOLUME', volume);
    localStorage.setItem('mcVolume', volume);
  },
  playNext({ dispatch, state }) {
    let index = state.playlist.findIndex((item) => item.playing === true);
    index++;
    if (index === state.playlist.length) {
      index = 0;
    }
    const song = state.playlist[index];
    dispatch('setPlaying', song);
  },
  playPrev({ dispatch, state }) {
    let index = state.playlist.findIndex((item) => item.playing === true);
    index--;
    if (index < 0) {
      index = state.playlist.length - 1;
    }
    const song = state.playlist[index];
    dispatch('setPlaying', song);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
