<template>
  <div>我是子组件</div>
  <button
    @click="handleClick"
    class="bg-orange-500 text-white p-2 rounded-md">
    获取实例
  </button>
</template>

<script setup lang="ts" name="Child">
import { getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { getTargetInstExposed } from '../../utils/dom.ts'

const instance = getCurrentInstance()

defineOptions({
  name: 'Child-comp',
})

function handleClick() {
  const targetRef = getTargetInstExposed(instance as ComponentInternalInstance, 'BasicLayout')
  console.log(`targetRef -->`, targetRef.commonHeaderRef.value.refresh())

  // targetRef.refresh()
  // console.log(`target -->`, instance?.parent?.parent?.parent?.parent?.parent?.parent)
}
</script>

<style scoped></style>
