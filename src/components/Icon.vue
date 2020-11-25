<template>
  <i class="mdi" :class="className"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
  },
  data() {
    return {
      className: '',
    };
  },
  mounted() {
    this.className = { [`mdi-${this.name}`]: !!this.name };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.mdi {
  font-size: $font-size + 4;
}
</style>
