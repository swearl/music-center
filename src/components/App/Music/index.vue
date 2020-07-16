<template>
    <base-app name="music" title="音乐" class="music-app" ref="MusicApp" @drop="drop">
        <v-hover v-slot:default="{ hover }" close-delay="500">
            <div class="content">
                <v-avatar size="300" tile>
                    <v-img :src="musicPlaying.pic" />
                </v-avatar>
                <v-slide-y-reverse-transition>
                    <v-overlay absolute v-if="hover">
                        <div class="d-flex flex-grow-1 flex-column justify-center align-center">
                            <div class="text-subtitle-1" v-html="musicPlaying.title"></div>
                            <div class="text-body-1" v-html="musicPlaying.author"></div>
                            <play-icon v-if="musicPlaying.index === undefined" />
                        </div>
                        <div class="text-caption time-current ml-2" v-html="currentTime">00:00</div>
                        <div class="text-caption time-total mr-2" v-html="durationTime">00:00</div>
                    </v-overlay>
                </v-slide-y-reverse-transition>
            </div>
        </v-hover>
        <v-progress-linear height="3" class="ma-0 progress" color="primary" :value="progress" />
    </base-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'MusicApp',
    computed: {
        ...mapGetters(['desktopWidth', 'desktopHeight', 'musicWidth', 'musicHeight', 'musicPlaying']),
        currentTime() {
            if (this.musicPlaying.current) {
                const min = Math.floor(this.musicPlaying.current / 60),
                    sec = this.musicPlaying.current % 60
                return [min.toString().padStart(2, '0'), sec.toString().padStart(2, '0')].join(':')
            }
            return '00:00'
        },
        durationTime() {
            if (this.musicPlaying.duration) {
                const min = Math.floor(this.musicPlaying.duration / 60),
                    sec = this.musicPlaying.duration % 60
                return [min.toString().padStart(2, '0'), sec.toString().padStart(2, '0')].join(':')
            }
            return '00:00'
        },
        progress: {
            get() {
                return this.musicPlaying.progress
            },
            set(val) {
                this.$store.dispatch('music/setProgress', val)
            },
        },
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

    // .progress {
    //     cursor: pointer;
    // }
}
</style>
