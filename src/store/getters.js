const getters = {
  backgroundImage: (state) => state.background.image,
  playing: (state) => state.player.playing,
  playlist: (state) => state.player.playlist,
  playerVolume: (state) => state.player.volume,
};

export default getters;
