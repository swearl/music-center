<template>
  <div class="icon-button" @click.prevent="onClick">
    <Icon :name="name" size="20px" />
  </div>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    name: String,
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

.icon-button {
  background-color: rgba(51, 51, 51, 0.5);
  color: #fff;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;

  &:hover {
    background-color: $main-color;
  }
}
</style>
