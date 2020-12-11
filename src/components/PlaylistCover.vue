<template>
  <router-link class="playlist-cover" :to="`/playlist/${server}/${id}`">
    <div class="title">{{ name }}</div>
    <div class="cover">
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
    };
  },
  created() {
    const { server, id } = this;
    meting.playlist(server, id).then((res) => {
      this.image = res.image;
      this.name = this.title === null ? res.title : this.title;
    });
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
    color: $red;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .cover {
    img {
      border-radius: 5px;
      width: 320px;
      height: 240px;
      object-fit: cover;
    }
  }
}
</style>
