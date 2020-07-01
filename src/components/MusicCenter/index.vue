<template>
    <v-app>
        <background />
        <login-form />
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
