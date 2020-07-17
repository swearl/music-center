<template>
    <v-container ref="desktop" v-if="desktopShow" fluid fill-height>
        <v-app-bar dense app>
            <v-spacer></v-spacer>
            <search-box />
            <v-btn text>{{ nowDateTime }}</v-btn>
            <volume-icon />
            <v-btn @click="$store.dispatch('user/logout')" icon mini>
                <v-avatar v-html="userNickname.substring(0, 1)" />
            </v-btn>
        </v-app-bar>
        <v-main class="align-self-start align-self-stretch main">
            <v-row class="icons"></v-row>
            <v-row class="apps">
                <music-app />
                <chat-app />
            </v-row>
        </v-main>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import dayjs from '../../plugins/dayjs'

export default {
    name: 'Desktop',
    computed: {
        ...mapGetters(['desktopShow', 'userNickname']),
        nowDateTime() {
            return dayjs(this.now).format('llll')
        },
    },
    data() {
        return {
            now: new Date(),
            intNew: null,
        }
    },
    created() {
        this.intNew = setInterval(() => {
            this.now = new Date()
        }, 200)
        window.addEventListener('resize', this.windowResize)
    },
    beforeDestroy() {
        clearInterval(this.intNew)
    },
    watch: {
        desktopShow(newVal, oldVal) {
            if (newVal != oldVal && newVal) {
                this.windowResize()
            }
        },
    },
    mounted() {
        this.windowResize()
    },
    methods: {
        windowResize() {
            this.$nextTick().then(() => {
                if (this.desktopShow) {
                    const { clientWidth, clientHeight } = this.$refs.desktop,
                        width = clientWidth,
                        height = clientHeight - 48
                    this.$store.dispatch('desktop/setSize', { width, height })
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.main {
    > .v-main__wrap {
        > .row {
            position: absolute;
        }
        > .icons {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            margin: 0;
            z-index: 1;
        }
        > .apps {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            margin: -12px;
        }
    }
}
</style>
