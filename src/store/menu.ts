import { MenuListItemProps } from '@/components/SidebarNav/types'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    logo: '/img/avatar.jpg',
    list: [] as MenuListItemProps[],
  }),

  actions: {
    async getMenuList() {
      // 这里可以根据用户权限动态生成菜单列表
      setTimeout(() => {
        this.list = [
          {
            name: '主页',
            pathName: 'homeindex',
            icon: 'icon-home'
          },
          {
            name: '用户管理',
            pathName: 'users',
            icon: 'icon-job-roles'
          },
          {
            name: '菜单管理',
            pathName: 'menus',
            icon: 'icon-menu',
          },
          {
            name: '角色管理',
            pathName: 'roles',
            icon: 'icon-quanxian'
          },
        ]
      }, 1000)
      
      return this.list
    }
  }
})
