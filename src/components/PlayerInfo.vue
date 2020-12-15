<template>
  <div class="player-info">
    <div class="cover">
      <icon name="music" size="24px" color="#c6c6c6" v-if="!playing" />
      <img class="image" :src="playing.pic" v-else />
    </div>
    <div class="info">
      <icon name="apple" size="30px" color="#999999" v-if="!playing" />
      <template v-else>
        <div class="title" v-html="playing.title" :title="playing.title"></div>
        <div
          class="artist"
          v-html="`${playing.author} - ${playing.album}`"
          :title="`${playing.author} - ${playing.album}`"
        ></div>
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
  },
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
    }

    .artist {
      max-width: 380px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: $font-size - 2;
      line-height: $font-size + 2;
      color: #666666;
      text-align: center;
    }
  }
}
</style>
