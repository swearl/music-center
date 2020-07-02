<template>
    <v-container ref="desktop" v-if="desktopShow" fluid fill-height>
        <v-app-bar dense app>
            <v-spacer></v-spacer>
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

export default {
    name: 'Desktop',
    computed: {
        ...mapGetters(['desktopShow', 'userNickname'])
    }
}
</script>
