<template>
  <div class="player-control">
    <div class="button prev" :class="{ disabled: !playing }">
      <icon name="rewind" size="28px" @click="onPlayPrev" />
    </div>
    <div class="button">
      <icon :name="!playing ? 'play' : 'pause'" size="32px" @click="onPlay" />
    </div>
    <div class="button next" :class="{ disabled: !playing }">
      <icon name="fast-forward" size="28px" @click="onPlayNext" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PlayerControl',
  computed: {
    ...mapGetters(['playing']),
  },
  methods: {
    onPlay() {
      // this.playIcon = this.playIcon === 'play' ? 'pause' : 'play';
    },
    onPlayPrev() {
      this.$store.dispatch('player/playPrev');
    },
    onPlayNext() {
      this.$store.dispatch('player/playNext');
    },
  },
};
</script>

<style lang="scss" scoped>
.player-control {
  width: 100px;
  display: flex;
  justify-content: space-between;

  .button {
    cursor: pointer;
    color: #808080;
    display: flex;
    align-items: center;

    &.disabled {
      cursor: unset;
      color: #c6c6c6;
      pointer-events: none;
    }
  }
}
</style>
