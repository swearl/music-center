<template>
  <div class="background">
    <img class="background-image" :src="bgImage" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Background',
  data() {
    return {
      bgImage: '',
    };
  },
  computed: {
    ...mapGetters(['backgroundImage']),
  },
  mounted() {
    this.bgImage = this.backgroundImage === 'default' ? require('@/assets/bg.jpg') : this.backgroundImage;
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
  }
}
</style>
