<template>
    <base-app name="chat" title="聊天" class="chat-app" ref="ChatApp" @drop="drop">
        <v-card>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title v-html="userNickname" class="title"></v-list-item-title>
                        <v-list-item-subtitle v-html="userStatus" v-if="userStatus !== ''"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-if="userOnline.length">
                <v-divider></v-divider>
                <v-subheader>在线用户</v-subheader>
                <v-list two-line subheader>
                    <v-list-item v-for="user in userOnline" :key="user.sid" @click="clickUser">
                        <v-list-item-avatar>
                            <v-icon v-text="icon.mdiAccount"></v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-text="user.nickname"></v-list-item-title>
                            <v-list-item-subtitle v-if="user.status !== ''" v-text="user.status"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </template>
        </v-card>
    </base-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { mdiAccount } from '@mdi/js'

export default {
    name: 'ChatApp',
    computed: {
        ...mapGetters([
            'desktopWidth',
            'desktopHeight',
            'chatWidth',
            'chatHeight',
            'userNickname',
            'userStatus',
            'userOnline',
            'userSocketID',
        ]),
    },
    data() {
        return {
            icon: { mdiAccount },
        }
    },
    mounted() {
        const { clientWidth, clientHeight } = this.$refs.ChatApp.$el
        this.$store.dispatch('chat/setSize', {
            width: clientWidth,
            height: clientHeight,
        })
        // console.log(this.userOnline)
    },
    methods: {
        drop({ x, y }) {
            this.$store.dispatch('chat/setPos', { x, y })
        },
        clickUser() {},
    },
}
</script>

<style lang="scss" scoped>
.chat-app {
    width: 300px;
}
</style>
