<template>
    <v-menu v-model="menu" offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon mini>
                <v-icon>{{ icon }}</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-slider :value="musicVolume" vertical step="10" @end="change"></v-slider>
        </v-card>
    </v-menu>
</template>

<script>
import { mdiVolumeHigh, mdiVolumeLow, mdiVolumeMedium, mdiVolumeOff } from '@mdi/js'
import { mapGetters } from 'vuex'

export default {
    name: 'VolumeIcon',
    data() {
        return {
            menu: false,
        }
    },
    computed: {
        ...mapGetters(['musicVolume']),
        icon() {
            if (this.musicVolume == 0) {
                return mdiVolumeOff
            } else if (this.musicVolume < 34) {
                return mdiVolumeLow
            } else if (this.musicVolume < 67) {
                return mdiVolumeMedium
            } else {
                return mdiVolumeHigh
            }
        },
    },
    methods: {
        change(volume) {
            this.$store.dispatch('music/setVolume', volume)
        },
    },
}
</script>

<style lang="scss" scoped>
::v-deep {
    .v-card {
        overflow: hidden;
    }
}
</style>
