<template>
  <div
    class="rule"
    @click="clk"
  >
    rule {{ title }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
  }>();

  const emit = defineEmits(['close'])

  const clk = () => {
    emit('close')
  }
</script>

<style scoped>
  .rule {
    color: #fff;
  }
</style>