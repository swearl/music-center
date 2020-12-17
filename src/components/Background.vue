<template>
  <div class="background">
    <transition name="fade">
      <img class="background-image" v-for="img in bgImgs" :src="img" :key="img" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Background',
  computed: {
    ...mapGetters(['backgroundImage']),
    bgImgs() {
      const img = this.backgroundImage === 'default' ? require('@/assets/bg.jpg') : this.backgroundImage;
      return [img];
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
</style>
