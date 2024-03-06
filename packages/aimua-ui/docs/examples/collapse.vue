<template>
  <Collapse v-model="openValue">
    <CollapseItem name="item1" title="标题1">
      <p>内容1</p>
    </CollapseItem>
    <CollapseItem name="item2" title="标题2">
      <p>内容2</p>
    </CollapseItem>
    <CollapseItem name="item3" title="标题3">
      <div>内容3</div>
    </CollapseItem>
    <CollapseItem disabled name="item4" title="标题4">
      <p>内容4</p>
    </CollapseItem>
  </Collapse>
</template>

<script setup>
import { ref } from 'vue'
import Collapse from '@/collapse/Collapse.vue'
import CollapseItem from '@/collapse/CollapseItem.vue'
const openValue = ref(['item1'])
</script>
