<template>
  <div class="text-filed">
    <icon class="icon" :name="icon" v-if="!!icon" />
    <input
      class="input"
      :class="{ 'with-icon': !!icon, 'with-close': closeButton && value !== '' }"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
      @keyup.enter="submit"
    />
    <icon class="icon close" name="close-circle" v-if="closeButton && value !== ''" @click.native="value = ''" />
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    icon: String,
    closeButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    submit() {
      if (this.value !== '') {
        this.$emit('submit', this.value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.text-filed {
  margin: 10px 0;
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    width: 30px;
    text-align: center;
    line-height: 30px;

    &.close {
      right: 0;
      z-index: +1;
      cursor: pointer;
    }
  }

  .input {
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.3s ease-in-out;
    outline: none;
    border: 1px solid #b9b9b9;
    background-color: rgba(204, 204, 204, 0.3);
    font-size: $font-size;
    width: 100%;

    &:focus {
      border: 1px solid $red;
      box-shadow: 0 0 5px $red;
    }

    &.with-icon {
      padding-left: 30px;
    }

    &.with-close {
      padding-right: 30px;
    }
  }
}
</style>
