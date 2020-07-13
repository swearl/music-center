<template>
    <v-container
        class="bg"
        :class="{
            [`bg-style-${backgroundStyle}`]: true,
            blur: backgroundBlur,
        }"
        fluid
        fill-height
        :style="{
            backgroundImage: 'url(' + background + ')',
        }"
    ></v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Background',
    computed: {
        ...mapGetters(['backgroundImage', 'backgroundStyle', 'backgroundBlur', 'backgroundUseCover']),
        background() {
            return this.backgroundUseCover
                ? this.backgroundImage
                : require(`@/assets/images/bg/${this.backgroundImage}.jpg`)
        },
    },
}
</script>

<style lang="scss" scoped>
.bg {
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;

    &.bg-style-default {
        background-position: center center;
        background-size: cover;
    }

    &.blur {
        filter: blur(10px);
    }
}
</style>
