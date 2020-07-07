<template>
    <v-card
        class="window"
        ref="Window"
        :class="`${moveable ? 'moveable' : ''} ${moving ? 'moving' : ''}`"
        :style="style"
    >
        <v-system-bar @mousedown="down">
            <span class="window-title" v-if="title != ''" v-html="title" />
            <v-spacer v-if="btnClose" />
            <v-btn v-if="btnClose" x-small icon @click="close">
                <v-icon>{{ icons.mdiClose }}</v-icon>
            </v-btn>
        </v-system-bar>
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>

<script>
import { mdiClose } from '@mdi/js'
import { mapGetters } from 'vuex'

export default {
    name: 'Window',
    props: {
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        btnClose: {
            type: Boolean,
            default: false,
        },
        moveable: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            icons: { mdiClose },
            style: '',
            moving: false,
            x: 0,
            y: 0,
            startX: 0,
            startY: 0,
            mouseStartX: 0,
            mouseStartY: 0,
            width: 0,
            height: 0,
        }
    },
    computed: {
        ...mapGetters(['musicX', 'musicY', 'desktopWidth', 'desktopHeight']),
    },
    mounted() {
        this.initWindow()
    },
    methods: {
        down(e) {
            if (!this.moveable) {
                return false
            }
            this.moving = true
            const { clientX, clientY } = e
            this.startX = this.x
            this.startY = this.y
            this.mouseStartX = clientX
            this.mouseStartY = clientY
            window.addEventListener('mouseup', this.up)
            window.addEventListener('mousemove', this.move)
        },
        move(e) {
            if (this.moving) {
                const { clientX, clientY } = e,
                    moveX = clientX - this.mouseStartX,
                    moveY = clientY - this.mouseStartY,
                    maxLeft = this.desktopWidth - this.width,
                    maxTop = this.desktopHeight - this.height
                this.x = this.startX + moveX
                this.y = this.startY + moveY
                if (this.x > maxLeft - 10) {
                    this.x = maxLeft
                }
                if (this.y > maxTop - 10) {
                    this.y = maxTop
                }
                if (this.x < 10) {
                    this.x = 0
                }
                if (this.y < 10) {
                    this.y = 0
                }
                this.style = { left: `${this.x}px`, top: `${this.y}px` }
            }
        },
        up() {
            if (!this.moveable) {
                this.style = ''
                return false
            }
            this.moving = false
            const { x, y } = this
            this.$emit('drop', { x, y })
        },
        close() {
            this.$emit('close')
        },
        initWindow() {
            this.$nextTick().then(() => {
                if (this.moveable) {
                    this.x = this.musicX
                    this.y = this.musicY
                    this.style = { left: `${this.x}px`, top: `${this.y}px` }
                }
                const { clientWidth, clientHeight } = this.$refs.Window.$el
                this.width = clientWidth
                this.height = clientHeight
            })
        },
    },
}
</script>

<style lang="scss">
.v-system-bar {
    .v-btn {
        .v-icon {
            margin-right: 0;
        }
    }
}
</style>

<style lang="scss" scoped>
.window {
    .window-title {
        cursor: default;
        user-select: none;
    }

    &.moveable {
        &.moving {
            cursor: move;
            user-select: none;

            .app-title {
                cursor: move;
            }
        }
    }
}
</style>
