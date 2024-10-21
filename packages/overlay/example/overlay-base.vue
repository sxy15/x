<template>
  <div class="overlay-example">
    <button class="overlay-example-btn" type="button" @click="toggle">
      {{ visible ? '隐藏' : '显示' }}
    </button>
    <Transition name="v-fade">
      <div class="overlay-example-wrapper" v-if="visible">
        <Overlay :show="visible">
          <div class="overlay-example-inner">
            <div>内容</div>
          </div>
        </Overlay>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Overlay from '../src/Overlay'
  import '../src/index.scss'
  const visible = ref(false)

  const toggle = () => {
    visible.value = !visible.value
  }
</script>

<style scoped lang="scss">
  .overlay-example {
    &-btn {
      width: 80px;
      height: 30px;
      border: 1px solid #191919;
      color: #191919;
      border-radius: 4px;
      cursor: pointer;
    }

    &-wrapper {
      position: relative;
      width: 100%;
      height: 100px;
      background-color: #191919;
      margin-top: 10px;
      border-radius: 6px;
      transform: translate(0, 0);
      overflow: hidden;
    }

    &-inner {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
</style>