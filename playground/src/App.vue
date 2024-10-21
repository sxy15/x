<script setup lang="ts">
  import { showToast } from '@v/toast'
  import { showModal } from '@v/modal'
  import Rule from './components/modal-rule.vue';

  const clkToast = () => {
    showToast({
      type: 'loading',
      message: 'this is toast hha!',
      duration: 0,
      forbidClick: false
    })

    setTimeout(() => {
      showToast({
        type: 'text',
        message: 'this is toast hha2!',
        duration: 0,
        forbidClick: true
      })
    }, 8000)
  }

  const clkModal = () => {
    showModal(Rule, {
      lockScroll: true,
      props: {
        title: 'this is modal'
      }
    })
  }
</script>

<template>
  <div>
    <div class="top" />
    <button @click="clkToast">
      show toast
    </button>
    <button @click="clkModal">
      show modal
    </button>
    <div class="bottom" />
  </div>
</template>

<style scoped>
  .top {
    height: 500px;
    background-color: #000;
  }

  .bottom {
    height: 500px;
    background-color: #000;
  }
</style>