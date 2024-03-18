<template>
  <section class="flex flex-nowrap">
    <!-- 左侧固定导航 -->
    <nav class="w-[280px] bg-slate-900 h-[100vh]">
      <SidebarNav
        :logo="logo"
        :menuList="list" />
    </nav>
    <!-- 右侧主体内容 -->
    <section class="w-[calc(100vw-280px)]">
      <header class="flex justify-between px-3 h-16">
        <div class="leading-[64px]">左侧</div>
        <div class="h-10 flex mt-3 overflow-hidden border-2 rounded-full">
          <img class="w-full" src="/img/avatar.jpg" />
        </div>
      </header>
      <nav class="bg-slate-100 h-10 px-3 leading-10">
        <template
          v-for="item in breadCrumbs"
          :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
          <span class="last:invisible"> &gt; </span>
        </template>
      </nav>
      <main class="overflow-hidden bg-white p-5 h-[calc(100vh-104px)] overflow-y-auto">
        <router-view></router-view>
      </main>
    </section>
  </section>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue'
import { useMenuStore } from '../store/menu'
import SidebarNav from '../components/SidebarNav/index.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// console.log("🚀 ~ route:", route)
const { logo, list } = toRefs(useMenuStore())
const { getMenuList } = useMenuStore()
getMenuList()

const breadCrumbs = computed(() => {
  const { matched } = route
  return matched.map(v => ({
    path: v.redirect || v.path,
    name: v.name,
  }))
})

// watch(list, (newVal) => {
//   console.log("🚀 ~ watch ~ newVal:", newVal)
//   let item = newVal.find(v => v.pathmatched === name)
//   console.log("🚀 ~ watch -> list:", item)
// })
// watch(list, (newVal, oldVal) => {
//   console.log("🚀 ~ watch ~ newVal:", newVal, oldVal)
// })
</script>

<style scoped></style>
