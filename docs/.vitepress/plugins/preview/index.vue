<template>
  <section class="example">
    <div class="example-title">{{ title }}</div>
    <div class="example-content">
      <div class="example-showcase">
        <slot />
      </div>
      <div class="example-divider--horizontal"></div>
      <div class="example-actions">
        <ToolTip placement="top" content="playground">
          <PlaygroundIcon class="pointer" />
        </ToolTip>
        <div class="example-actions--right">
          <ToolTip placement="top" content="复制代码">
            <CopyIcon class="pointer" @click="copyCode" />
          </ToolTip>
          <ToolTip placement="top" content="查看源代码">
            <CodeIcon class="pointer" @click="toggleExpanded" />
          </ToolTip>
        </div>
        <span v-show="copyState" class="example-actions-tip">复制成功</span>
      </div>
      <CollapseTransition>
        <div v-show="isExpanded" class="example-source-wrapper">
          <div class="example-source language-vue">
            <div v-html="decodeSource(hlSource)"></div>
          </div>
        </div>
      </CollapseTransition>
      <Transition name="fade-in-linear">
        <div v-show="isExpanded" class="example-control" @click="toggleExpanded">
          <span class="control-icon"></span>
          <span class="control-text">隐藏源代码</span>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CopyIcon from './icons/Copy.vue';
import CodeIcon from './icons/Code.vue';
import PlaygroundIcon from './icons/Playground.vue';
import ToolTip from './ToolTip.vue';
import CollapseTransition from './CollapseTransition.vue';
import { useCopy } from './use/useCopy';
import 'highlight.js/styles/github.css';
import './index.scss';

const props = defineProps<{
  title: string,
  source: string,
  hlSource: string
}>()

const decodeSource = (source: string) => {
  return decodeURIComponent(escape(atob(source)))
}

const isExpanded = ref(false)
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const { copyState, copyCode } = useCopy(decodeSource(props.source))
</script>

<style scoped lang="scss">
:global(.vp-doc .example-source[class*='language-']) {
  margin: 0;
  border-radius: 0;
}

:global(.example-source[class*='language-'] pre) {
  margin: 0;
  padding: 1rem;
  white-space: pre-wrap;
  word-break: break-word;
}

:global(.example-source[class*='language-'] code) {
  padding: 0;
  background-color: transparent;
  font-family: var(--vp-font-family-mono);
}

.example {
  position: relative;
}

.example-title {
  font-size: 16px;
}

.example-content {
  border: 1px solid var(--preview-border);
  border-radius: 4px;
  margin: 20px 0 50px;
}

.example-showcase {
  padding: 1rem;
  color: var(--preview-text-1);
  background-color: var(--preview-bg);
}

.example-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
}

.example-actions {
  position: relative;
  display: flex;
  height: 40px;
  padding: 0 8px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px dashed var(--preview-divider);
}

.example-actions--right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.example-source-wrapper {
  overflow: hidden;
  border-top: 1px dashed var(--preview-divider);
  transition: 0.3s;
}

.example-control {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--preview-border);
  height: 44px;
  box-sizing: border-box;
  background-color: var(--preview-bg);
  color: var(--preview-text-2);
  cursor: pointer;
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}

.example-control .control-text {
  margin-left: 10px;
  font-size: 14px;
}

.control-icon {
  content: '';
  width: 0;
  height: 0;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  border-bottom: 6px solid var(--preview-text-3);
}

.example-control:hover .control-icon {
  border-bottom-color: var(--preview-primary-color);
}

.example-control:hover {
  color: var(--preview-primary-color);
}

.example-actions-tip {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-size: 14px;
  color: var(--preview-green-3);
}

.pointer {
  cursor: pointer;
}
</style>
