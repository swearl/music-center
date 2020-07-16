<template>
    <v-card class="window" ref="Window" @mousedown.passive="focus" :class="{ moveable, moving }" :style="style">
        <v-system-bar @mousedown="down">
            <span class="window-title" v-if="title != ''" v-html="title" />
            <v-spacer v-if="btnClose" />
            <v-btn v-if="btnClose" x-small icon @click="close">
                <v-icon>{{ icons.mdiClose }}</v-icon>
            </v-btn>
        </v-system-bar>
        <template v-if="fluid">
            <slot />
        </template>
        <v-card-text v-else>
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
        fluid: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            icons: { mdiClose },
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
        ...mapGetters(['desktopWidth', 'desktopHeight']),
        windowX() {
            if (!this.moveable || this.name === '') {
                return 0
            }
            const key = `${this.name}X`
            return this.$store.getters[key]
        },
        windowY() {
            if (!this.moveable || this.name === '') {
                return 0
            }
            const key = `${this.name}Y`
            return this.$store.getters[key]
        },
        windowZ() {
            if (!this.moveable || this.name === '') {
                return false
            }
            const key = `${this.name}Z`
            return this.$store.getters[key]
        },
        style() {
            if (!this.moveable) {
                return ''
            }
            return { left: `${this.x}px`, top: `${this.y}px`, zIndex: this.windowZ }
        },
    },
    mounted() {
        this.initWindow()
    },
    methods: {
        down(e) {
            if (!this.moveable || this.name === '') {
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
            this.setPos(e)
        },
        up() {
            if (!this.moveable || this.name === '') {
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
        focus() {
            if (!this.moveable || this.name === '') {
                return false
            }
            // console.log('focus')
            this.$store.dispatch('desktop/setFocus', this.name)
        },
        initWindow() {
            this.$nextTick().then(() => {
                if (this.moveable) {
                    console.log(this.windowX, this.windowY)
                    this.x = this.windowX
                    this.y = this.windowY
                    // this.style = { left: `${this.x}px`, top: `${this.y}px` }
                }
                const { clientWidth, clientHeight } = this.$refs.Window.$el
                this.width = clientWidth
                this.height = clientHeight
            })
        },
        setPos(e) {
            this.$nextTick().then(() => {
                if (this.moving) {
                    const { clientX, clientY } = e,
                        moveX = clientX - this.mouseStartX,
                        moveY = clientY - this.mouseStartY,
                        maxLeft = this.desktopWidth - this.width,
                        maxTop = this.desktopHeight - this.height,
                        x = this.startX + moveX,
                        y = this.startY + moveY
                    this.x = x > maxLeft - 10 ? maxLeft : x < 10 ? 0 : x
                    this.y = y > maxTop - 10 ? maxTop : y < 10 ? 0 : y
                    // this.style = { left: `${this.x}px`, top: `${this.y}px` }
                }
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
        position: absolute;

        &.moving {
            cursor: move;
            user-select: none;

            .window-title {
                cursor: move;
            }
        }
    }
}
</style>
