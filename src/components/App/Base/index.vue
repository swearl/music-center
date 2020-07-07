<template>
    <window :title="title" class="base-app" btn-close moveable @drop="drop">
        <slot />
    </window>
</template>

<script>
export default {
    name: 'BaseApp',
    props: {
        title: {
            type: String,
            default: '',
        },
    },
    methods: {
        drop(e) {
            this.$emit('drop', e)
        },
    },
}
</script>

<style lang="scss" scoped>
.base-app {
    position: absolute;
}
</style>
