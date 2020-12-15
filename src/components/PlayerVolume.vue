<template>
  <div class="player-volume">
    <div class="button low">
      <icon name="volume-low" size="18px" />
    </div>
    <div class="bar" @click="setVolume">
      <div class="current" :style="{ width: `${playerVolume}%` }"></div>
    </div>
    <div class="button high">
      <icon name="volume-high" size="18px" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PlayerVolume',
  computed: {
    ...mapGetters(['playerVolume']),
  },
  methods: {
    setVolume(e) {
      const width = e.target.offsetWidth;
      const current = e.clientX - e.target.offsetLeft;
      const volume = parseInt((current / width) * 100);
      this.$store.dispatch('player/setVolume', volume);
    },
  },
};
</script>

<style lang="scss" scoped>
.player-volume {
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;

  .button {
    color: #bfbfbf;
  }

  .bar {
    width: 60px;
    height: 2px;
    background-color: #f2f2f2;
    border: 1px solid #e5e5e5;
    position: relative;
    cursor: pointer;

    .current {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #bfbfbf;
      border: 1px solid #b2b2b2;
      transition: all 0.3s ease-in-out;
      pointer-events: none;
    }
  }
}
</style>
