<template>
  <button
    ref="_ref"
    class="af-button"
    :class="{
      [`af-button--${type}`]: type,
      [`af-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types.ts'

defineOptions({
  name: 'AfButton',
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref,
})
</script>

<style scoped></style>
