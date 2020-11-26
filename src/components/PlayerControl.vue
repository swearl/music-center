<template>
  <div class="player-control">
    <div class="button prev disabled">
      <icon name="rewind" size="28px" />
    </div>
    <div class="button player">
      <icon name="play" size="32px" />
    </div>
    <div class="button next disabled">
      <icon name="fast-forward" size="28px" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerControl',
};
</script>

<style lang="scss" scoped>
.player-control {
  width: 100px;
  display: flex;
  justify-content: space-between;

  .button {
    cursor: pointer;
    color: #808080;
    display: flex;
    align-items: center;

    &.disabled {
      cursor: unset;
      color: #c6c6c6;
    }
  }
}
</style>
