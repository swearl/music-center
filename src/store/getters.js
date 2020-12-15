const getters = {
  backgroundImage: (state) => state.background.image,
  playing: (state) => state.player.playing,
  playlist: (state) => state.player.playlist,
};

export default getters;
