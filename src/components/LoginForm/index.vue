<template>
    <v-row justify="center">
        <v-dialog persistent max-width="250" v-model="loginFormShow">
            <v-card>
                <v-system-bar>
                    <span>登录</span>
                </v-system-bar>
                <v-card-text>
                    <v-text-field
                        label="昵称"
                        v-model="nickname"
                        @keyup.enter="setNickname"
                    />
                </v-card-text>
            </v-card>
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
            this.$store.dispatch('user/setNickname', this.nickname)
        }
    },
    computed: {
        ...mapGetters(['loginFormShow'])
    }
}
</script>
