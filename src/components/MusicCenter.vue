<template>
  <div class="music-center">
    <div class="side-bar">
      <div class="wrapper">
        <traffic-lights />
        <text-field placeholder="搜索" icon="magnify" :close-button="true" @submit="submit" />
        <div class="nav">
          <p class="title">Music Center</p>
          <div class="items">
            <nav-item to="/" icon="play-circle-outline" title="听歌" />
            <nav-item to="/about" icon="music" title="About" />
          </div>
        </div>
      </div>
    </div>
    <div class="content-panel">
      <player />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';
export default {
  components: { NavItem },
  name: 'MusicCenter',
  methods: {
    submit(txt) {
      console.log(txt);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.music-center {
  display: flex;
  width: 960px;
  height: 640px;
  background-color: transparent;
  border-radius: 15px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.75);

  .side-bar {
    width: 200px;
    border-right: 1px solid #cccccc;

    .wrapper {
      padding: 20px;

      .nav {
        .title {
          padding: 5px;
          color: #666;
          font-size: $font-size - 2;
        }
        .items {
          .item {
            display: block;
            color: $font-color;
            border-radius: 5px;
            padding: 5px;
            text-decoration: none;

            &.router-link-exact-active {
              background-color: rgba(17, 17, 17, 0.1);
            }
          }
        }
      }
    }
  }

  .content-panel {
    background-color: #ffffff;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .content {
      flex-grow: 1;
    }
  }
}
</style>
