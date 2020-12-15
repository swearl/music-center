<template>
  <i
    :class="{
      mdi: true,
      [`mdi-${name}`]: !!name,
    }"
    :style="customStyle"
    @click="onClick"
  ></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    color: String,
    size: String,
  },
  data() {
    return {
      className: '',
      customStyle: {},
    };
  },
  mounted() {
    if (this.color) {
      this.customStyle['color'] = this.color;
    }
    if (this.size) {
      this.customStyle['font-size'] = this.size;
    }
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
