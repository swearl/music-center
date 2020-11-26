<template>
  <div class="player">
    <player-control />
    <player-info />
    <player-volume />
  </div>
</template>

<script>
export default {
  name: 'Player',
};
</script>

<style lang="scss" scoped>
.player {
  height: 50px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > div {
    margin: 0 20px;
  }
}
</style>
