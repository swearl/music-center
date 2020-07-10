<template>
    <v-btn icon @click="play">
        <v-icon>{{ icon.mdiPlay }}</v-icon>
    </v-btn>
</template>

<script>
import { mdiPlay, mdiPause } from '@mdi/js'

export default {
    name: 'PlayIcon',
    data() {
        return {
            icon: { mdiPlay, mdiPause },
        }
    },
    methods: {
        play() {
            const src =
                    'https://dl.stream.qqmusic.qq.com/M500000hPD463wBdk6.mp3?guid=1078182211&vkey=FE87875029D8F0BA2851A879067CFE401A57585EEBA283B6CA00C85D2E9CE6E5EBD951B45E8532D4DEF8CB5954A74261F7229EB2B0A54520&uin=0&fromtag=66',
                cover = 'https://y.gtimg.cn/music/photo_new/T002R500x500M000004T02kD1ybahm_1.jpg?max_age=2592000',
                title = 'unlasting',
                artist = 'LiSA',
                status = ''
            this.$store.dispatch('music/setPlaying', { src, title, artist, cover, status })
        },
    },
}
</script>
