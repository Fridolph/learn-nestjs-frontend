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
        <span>左侧</span>
        <div>Fridolph</div>
      </header>
      <nav class="bg-slate-100 h-10 px-3 leading-10">
        <!-- <router-link to="/">Home</router-link>  -->
        |
        <!-- <router-link to="/about">About</router-link> -->
      </nav>
      <main class="overflow-hidden bg-white p-5 h-[calc(100vh-104px)] overflow-y-auto">
        <router-view></router-view>
      </main>
    </section>
  </section>
</template>

<script setup lang="ts">
import { toRefs, watch } from 'vue'
import { useMenuStore } from '../store/menu'
import SidebarNav from '../components/SidebarNav/index.vue'

const { logo, list } = toRefs(useMenuStore())
const { getMenuList } = useMenuStore()

getMenuList()

// watch(list, (newVal, oldVal) => {
//   console.log("🚀 ~ watch ~ newVal:", newVal, oldVal)
// })
</script>

<style scoped></style>
