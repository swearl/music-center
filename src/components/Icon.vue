<template>
  <i class="mdi" :class="className" :style="customStyle"></i>
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
    this.className = { [`mdi-${this.name}`]: !!this.name };
    if (this.color) {
      this.customStyle['color'] = this.color;
    }
    if (this.size) {
      this.customStyle['font-size'] = this.size;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.mdi {
  font-size: $font-size + 4;
  color: $font-color;
}
</style>
