<template>
  <router-link class="nav-item" :to="to">
    <icon class="icon" :name="icon" size="16px" />
    <span v-html="title" />
  </router-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    to: String,
    icon: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.nav-item {
  display: block;
  color: $font-color;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;

  &.router-link-exact-active {
    background-color: rgba(17, 17, 17, 0.1);
  }

  .icon {
    color: $main-color;
    padding: 0 5px;
  }
}
</style>
