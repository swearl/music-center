<template>
  <div class="traffic-lights">
    <div class="dot red"></div>
    <div class="dot yellow"></div>
    <div class="dot green"></div>
  </div>
</template>

<script>
export default {
  name: 'TrafficLights',
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.traffic-lights {
  display: flex;
  padding-bottom: 20px;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 10px;

    &.red {
      background-color: $red;
    }

    &.yellow {
      background-color: $yellow;
    }

    &.green {
      background-color: $green;
    }
  }
}
</style>
