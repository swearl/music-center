<template>
  <div class="home">
    <div class="container">
      <div class="playlist">
        <playlist-cover title="本日推荐" server="tencent" id="5874217138" />
        <playlist-cover title="本周新歌推荐" server="tencent" id="6961910440" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  .container {
    box-sizing: border-box;
    padding: 40px;

    .playlist {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
