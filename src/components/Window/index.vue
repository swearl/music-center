<template>
    <v-card class="window">
        <v-system-bar>
            <span class="window-title" v-if="title != ''" v-html="title" />
            <v-spacer v-if="btnClose" />
            <v-btn v-if="btnClose" x-small icon>
                <v-icon>{{ icons.mdiClose }}</v-icon>
            </v-btn>
        </v-system-bar>
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>

<script>
import { mdiClose } from '@mdi/js'

export default {
    name: 'Window',
    props: {
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        btnClose: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            icons: { mdiClose },
        }
    },
}
</script>

<style lang="scss">
.v-system-bar {
    .v-btn {
        .v-icon {
            margin-right: 0;
        }
    }
}
</style>

<style lang="scss" scoped>
.window {
    .window-title {
        cursor: default;
        user-select: none;
    }
}
</style>
