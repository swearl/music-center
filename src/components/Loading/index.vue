<template>
    <v-dialog v-model="loadingShow" persistent width="300">
        <window :title="loadingText">
            <v-progress-linear indeterminate color="primary" />
        </window>
    </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Loading',
    computed: {
        ...mapGetters(['loadingShow', 'loadingText']),
    },
}
</script>

<style lang="scss" scoped>
.window {
    &.v-card {
        ::v-deep {
            .v-card__text {
                padding-top: 20px;
            }
        }
    }
}
</style>
