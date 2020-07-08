<template>
    <base-app title="音乐" class="music-app" ref="MusicApp" @drop="drop">
        <v-progress-linear :value="50" height="3"></v-progress-linear>
        <div v-html="`Desktop: ${desktopWidth} x ${desktopHeight}`"></div>
        <div v-html="`App: ${musicWidth} x ${musicHeight}`"></div>
    </base-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'MusicApp',
    computed: {
        ...mapGetters(['desktopWidth', 'desktopHeight', 'musicWidth', 'musicHeight']),
    },
    mounted() {
        const { clientWidth, clientHeight } = this.$refs.MusicApp.$el
        this.$store.dispatch('music/setSize', {
            width: clientWidth,
            height: clientHeight,
        })
    },
    methods: {
        drop({ x, y }) {
            this.$store.dispatch('music/setPos', { x, y })
        },
    },
}
</script>

<style lang="scss" scoped>
.music-app {
    width: 300px;
}
</style>
