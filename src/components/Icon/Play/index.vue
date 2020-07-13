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
                    'https://dl.stream.qqmusic.qq.com/M8000042qvw60RlPuE.mp3?guid=130258400&vkey=F8980DE72EF84C1FC831DCFB7FC11FE95F0D70CE12335DE60033759B7B3BCCAEBC2FC78944B1B0A7D865FBF3991B256FC2948DF231DACAB8&uin=0&fromtag=66',
                cover = 'https://y.gtimg.cn/music/photo_new/T002R500x500M0000018ITXw4OQkVD.jpg?max_age=2592000',
                title = 'Cutie Panther',
                artist = 'BiBi',
                status = ''
            this.$store.dispatch('music/setPlaying', { src, title, artist, cover, status })
        },
    },
}
</script>
