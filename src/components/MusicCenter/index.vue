<template>
    <v-app>
        <background />
        <login-form />
        <desktop />
        <loading />
    </v-app>
</template>

<script>
export default {
    name: 'MusicCenter',
    mounted() {
        this.$store.dispatch('init')
    },
}
</script>
