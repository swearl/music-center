<template>
    <window :name="name" :title="title" class="base-app" btn-close moveable @drop="drop" fluid>
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
        name: {
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

<style lang="scss" scoped></style>
