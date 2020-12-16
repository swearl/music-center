<template>
  <div class="player-info">
    <div class="cover">
      <icon name="music" size="24px" color="#c6c6c6" v-if="!playing" />
      <img class="image" :src="playing.pic" v-else />
    </div>
    <div class="info">
      <icon name="apple" size="30px" color="#999999" v-if="!playing" />
      <template v-else>
        <div class="title" v-html="playing.title" :title="playing.title" />
        <div
          class="artist"
          v-html="`${playing.author} - ${playing.album}`"
          :title="`${playing.author} - ${playing.album}`"
        />
        <div class="time">
          <div class="current" v-html="currentTime"></div>
          <div class="duration" v-html="durationTime"></div>
          <div class="progress">
            <div class="current" :style="{ width: `${progress}%` }"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PlayerInfo',
  computed: {
    ...mapGetters(['playing']),
    currentTime() {
      if (this.playing.current) {
        const min = Math.floor(this.playing.current / 60),
          sec = this.playing.current % 60;
        return [min.toString().padStart(2, '0'), sec.toString().padStart(2, '0')].join(':');
      }
      return '00:00';
    },
    durationTime() {
      if (this.playing.duration) {
        const min = Math.floor(this.playing.duration / 60),
          sec = this.playing.duration % 60;
        return [min.toString().padStart(2, '0'), sec.toString().padStart(2, '0')].join(':');
      }
      return '00:00';
    },
    progress: {
      get() {
        return this.playing.progress;
      },
      set(val) {
        this.$store.dispatch('player/setProgress', val);
      },
    },
  },
  // watch: {
  //   'playing.current'() {
  //     console.log(this.playing.current);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.player-info {
  border-radius: 3px;
  border: 1px solid #e9e9e9;
  height: 40px;
  display: flex;
  flex-grow: 1;

  .cover {
    width: 40px;
    height: 40px;
    background-color: #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    position: relative;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
      max-width: 380px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: $font-size;
      text-align: center;
      position: relative;
      z-index: +1;
    }

    .artist {
      max-width: 300px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: $font-size - 2;
      line-height: $font-size + 2;
      color: #666666;
      text-align: center;
      position: relative;
      z-index: +1;
    }

    .time {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      // opacity: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      > .current,
      > .duration {
        color: #bdbdbd;
        font-size: $font-size - 2;
        margin-bottom: 5px;
        opacity: 0;
        transition: all 300ms ease-in-out;
      }

      > .current {
        margin-left: 10px;
      }

      > .duration {
        margin-right: 10px;
      }

      > .progress {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background-color: #e5e5e5;

        > .current {
          transition: all 500ms ease-in-out;
          background-color: #727272;
          position: absolute;
          left: 0;
          top: 0;
          height: 3px;
        }
      }
    }

    &:hover {
      .time {
        > .current,
        > .duration {
          opacity: 1;
        }
      }
    }
  }
}
</style>
