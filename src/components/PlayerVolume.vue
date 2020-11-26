<template>
  <div class="player-volume">
    <div class="button low">
      <icon name="volume-low" size="18px" />
    </div>
    <div class="bar">
      <div class="current" style="width: 30%"></div>
    </div>
    <div class="button high">
      <icon name="volume-high" size="18px" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerVolume',
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

    .current {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #bfbfbf;
      border: 1px solid #b2b2b2;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
