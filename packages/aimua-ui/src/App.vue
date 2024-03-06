<script setup lang="ts">
import { ref } from 'vue'
import Button from './button/Button.vue'
import AfCollapse from './collapse/Collapse.vue'
import AfCollapseItem from './collapse/CollapseItem.vue'
const openedValue = ref(['1'])
</script>

<template>
  <main>
    <Button>default</Button>
    <Button type="primary" plain ref="buttonRef">primary</Button>
    <Button type="danger">danger</Button>
    <Button type="info">info</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button :disabled="true">disabled</Button>
    <br />
    <br />
    <Button plain type="primary" ref="buttonRef">primary</Button>
    <Button plain type="danger">danger</Button>
    <Button plain type="info">info</Button>
    <Button plain type="success">success</Button>
    <Button plain type="warning">warning</Button>
    <br />
    <br />
    <Button :round="true">round</Button>

    <br />
    <AfCollapse v-model="openedValue" :accordion="true">
      <AfCollapseItem name="1" title="title1">content1</AfCollapseItem>
      <AfCollapseItem name="2" title="title2">content2</AfCollapseItem>
      <AfCollapseItem name="3" title="title3" :disabled="true">content3</AfCollapseItem>
    </AfCollapse>
  </main>
</template>

<style scoped></style>
