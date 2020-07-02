<template>
    <v-app>
        <background />
        <login-form />
        <desktop />
    </v-app>
</template>

<script>
export default {
    name: 'MusicCenter',
    mounted() {
        this.$store.dispatch('init')
    }
}
</script>
