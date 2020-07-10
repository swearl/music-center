<template>
    <base-app title="音乐" class="music-app" ref="MusicApp" @drop="drop">
        <v-hover v-slot:default="{ hover }" close-delay="500">
            <div class="content">
                <v-avatar size="300" tile>
                    <v-img :src="musicPlaying.cover" />
                </v-avatar>
                <v-slide-y-reverse-transition>
                    <v-overlay absolute v-if="hover">
                        <div class="d-flex flex-grow-1 flex-column justify-center align-center">
                            <div class="text-subtitle-1" v-html="musicPlaying.title"></div>
                            <div class="text-body-1" v-html="musicPlaying.artist"></div>
                            <play-icon />
                        </div>
                        <div class="text-caption time-current ml-2" v-html="musicPlaying.current">00:00</div>
                        <div class="text-caption time-total mr-2" v-html="musicPlaying.duration">00:00</div>
                    </v-overlay>
                </v-slide-y-reverse-transition>
            </div>
        </v-hover>
        <v-progress-linear height="3" class="ma-0" color="primary" :value="musicPlaying.progress" />
    </base-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'MusicApp',
    computed: {
        ...mapGetters(['desktopWidth', 'desktopHeight', 'musicWidth', 'musicHeight', 'musicPlaying']),
    },
    data() {
        return {
            audio: null,
            playing: {},
        }
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

    .content {
        position: relative;
        width: 300px;
        height: 300px;
        overflow: hidden;

        ::v-deep {
            .v-overlay__content {
                display: flex;
                width: 100%;
                height: 100%;

                .time-current {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }

                .time-total {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
        }
    }
}
</style>
