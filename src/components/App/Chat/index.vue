<template>
    <base-app name="chat" title="聊天" class="chat-app" ref="ChatApp" @drop="drop">
        <slot />
    </base-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ChatApp',
    computed: {
        ...mapGetters(['desktopWidth', 'desktopHeight', 'chatWidth', 'chatHeight']),
    },
    mounted() {
        const { clientWidth, clientHeight } = this.$refs.ChatApp.$el
        this.$store.dispatch('chat/setSize', {
            width: clientWidth,
            height: clientHeight,
        })
    },
    methods: {
        drop({ x, y }) {
            this.$store.dispatch('chat/setPos', { x, y })
        },
    },
}
</script>

<style lang="scss" scoped>
.chat-app {
    width: 300px;
}
</style>
