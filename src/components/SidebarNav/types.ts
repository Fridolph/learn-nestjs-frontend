export interface SidebarLogoProps {
  logo: string
}

export interface MenuListItemProps {
  name: string;
  icon?: string;
  path?: string;
  pathName?: string;
  children?: MenuListItemProps[];
}

export interface SidebarProps {
  logo: string;
  menuList: MenuListItemProps[]
}