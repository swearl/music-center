<template>
    <v-autocomplete
        class="search-box"
        hide-details
        :prepend-inner-icon="icon.mdiMagnify"
        label="搜索"
        dense
        clearable
        no-data-text="未找到数据"
        :search-input.sync="keyword"
        @keydown.enter="onSearch"
        :items="items"
        :loading="loading"
        v-model="selected"
    ></v-autocomplete>
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
    name: 'SearchBox',
    data() {
        return {
            icon: { mdiMagnify },
            keyword: '',
            loading: false,
            items: [],
            selected: '',
        }
    },
    methods: {
        onSearch() {
            console.log(this.keyword)
            this.loading = true
            setTimeout(() => {
                this.items = ['1', '2', '3', '4']
                this.loading = false
            }, 1000)

            // this.items = [1, 2, 3, 4]
        },
    },
}
</script>

<style lang="scss" scoped>
.search-box {
    max-width: 350px;
}
</style>
