<template>
  <header class="flex justify-between px-3 h-16">
    <div class="leading-[64px]">左侧</div>
    <div
      class="h-10 flex mt-3 overflow-hidden border-2 rounded-full"
      ref="avatarRef">
      <img
        class="w-full"
        :src="toggle ? '/img/avatar.jpg' : '/img/avatar2.jpg'" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({ name: 'ComplianceEntry' })

const toggle = ref(false)
const avatarRef = ref<HTMLDivElement>(null)
function refresh() {
  toggle.value = !toggle.value
}

defineExpose({
  refresh,
  avatarRef,
})
</script>

<style scoped></style>
