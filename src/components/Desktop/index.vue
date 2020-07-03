<template>
    <v-container ref="desktop" v-if="desktopShow" fluid fill-height>
        <v-app-bar dense app>
            <v-spacer></v-spacer>
            <v-btn text>{{ nowDateTime }}</v-btn>
            <v-btn
                icon
                v-html="userNickname"
                @click="$store.dispatch('user/logout')"
            />
        </v-app-bar>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

export default {
    name: 'Desktop',
    computed: {
        ...mapGetters(['desktopShow', 'userNickname']),
        nowDateTime() {
            return dayjs(this.now).format('YYYY年M月D日 Ah点mm分 dddd')
        }
    },
    data() {
        return {
            now: new Date(),
            intNew: null
        }
    },
    created() {
        this.intNew = setInterval(() => {
            this.now = new Date()
        }, 200)
    },
    beforeDestroy() {
        clearInterval(this.intNew)
    },
    watch: {
        desktopShow(newVal, oldVal) {
            if (newVal != oldVal && newVal) {
                this.windowResize()
            }
        }
    },
    methods: {
        windowResize() {
            this.$nextTick().then(() => {
                if (this.desktopShow) {
                    const { clientWidth, clientHeight } = this.$refs.desktop
                    this.$store.dispatch('desktop/setSize', {
                        width: clientWidth,
                        height: clientHeight
                    })
                }
            })
        }
    }
}
</script>
