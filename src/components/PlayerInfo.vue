<template>
  <div class="player-info">
    <div class="cover">
      <icon name="music" size="24px" color="#c6c6c6" />
    </div>
    <div class="info">
      <icon name="apple" size="30px" color="#999999" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerInfo',
};
</script>

<style lang="scss" scoped>
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
  }

  .info {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
