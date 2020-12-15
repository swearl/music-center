<template>
  <router-link class="playlist-cover" :to="`/playlist/${server}/${id}`">
    <div class="title">{{ name }}</div>
    <div class="cover">
      <div class="mask">
        <icon-button class="button" name="play" @click="play" />
      </div>
      <img :src="image" />
    </div>
  </router-link>
</template>

<script>
import meting from '@/utils/meting';

export default {
  name: 'PlaylistCover',
  props: {
    title: {
      type: String,
      default: null,
    },
    server: {
      type: String,
      default: 'tencent',
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image: '',
      name: '',
      songs: [],
    };
  },
  created() {
    const { server, id } = this;
    meting.playlist(server, id).then((res) => {
      console.log(res);
      this.image = res.image;
      this.name = this.title || res.title;
      this.songs = res.songs;
    });
  },
  methods: {
    play() {
      console.log(this.songs);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.playlist-cover {
  display: flex;
  flex-direction: column;
  width: 320px;
  text-decoration: none;

  .title {
    color: $main-color;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .cover {
    position: relative;
    border-radius: 5px;
    width: 320px;
    height: 240px;
    overflow: hidden;

    .mask {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(51, 51, 51, 0.3);
      z-index: +1;

      .button {
        position: absolute;
        bottom: 20px;
        right: 20px;
      }
    }

    img {
      width: 320px;
      height: 240px;
      object-fit: cover;
    }
  }

  &:hover {
    .cover {
      .mask {
        display: block;
      }
    }
  }
}
</style>
