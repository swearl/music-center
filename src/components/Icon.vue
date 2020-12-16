<template>
  <i :class="{ [`mdi-${name}`]: !!name, mdi: true }" :style="{ color, 'font-size': size }" @click="onClick" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    color: String,
    size: String,
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.mdi {
  font-size: $font-size + 4;
  color: inherit;
}
</style>
