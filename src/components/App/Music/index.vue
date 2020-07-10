<template>
    <base-app title="音乐" class="music-app" ref="MusicApp" @drop="drop">
        <v-row class="ma-0">
            <v-col class="pa-0" cols="auto">
                <v-avatar size="100" tile>
                    <v-img src="@/assets/images/bg/default.jpg" />
                </v-avatar>
            </v-col>
            <v-col>
                <div>Title</div>
                <div>Artist</div>
            </v-col>
        </v-row>
        <v-progress-linear height="3" class="ma-0" color="primary" value="40" />
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
