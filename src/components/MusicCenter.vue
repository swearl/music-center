<template>
  <div class="music-center">
    <div class="side-bar">
      <div class="wrapper">
        <traffic-lights />
        <text-field placeholder="搜索" icon="magnify" :close-button="true" @submit="submit" />
        <div class="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
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
export default {
  name: 'MusicCenter',
  methods: {
    submit(txt) {
      console.log(txt);
    },
  },
};
</script>

<style lang="scss" scoped>
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
