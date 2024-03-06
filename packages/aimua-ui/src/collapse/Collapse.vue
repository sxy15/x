<template>
  <div class="af-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { ref, provide, watch } from 'vue'
import { collapseContextKey } from './types'

defineOptions({
  name: 'AfCollapse',
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref<NameType[]>(props.modelValue || [])

watch(
  () => props.modelValue,
  (val) => {
    activeNames.value = val
  },
)

if (props.accordion && activeNames.value.length > 1) {
  console.warn('AfCollapse', 'accordion mode activeNames length should be 1')
  activeNames.value = [activeNames.value[0]]
}

const handleItemClick = (name: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value.includes(name) ? '' : name]
  } else {
    const index = activeNames.value.indexOf(name)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(name)
    }
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
})
</script>
