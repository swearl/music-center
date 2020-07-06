<template>
    <v-row justify="center">
        <v-dialog persistent max-width="250" v-model="loginFormShow">
            <window title="登录">
                <v-text-field label="昵称" v-model="nickname" @keyup.enter="setNickname" />
            </window>
        </v-dialog>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'LoginForm',
    data() {
        return {
            nickname: ''
        }
    },
    methods: {
        setNickname() {
            this.$store.dispatch('user/login', this.nickname)
        }
    },
    computed: {
        ...mapGetters(['loginFormShow'])
    }
}
</script>
