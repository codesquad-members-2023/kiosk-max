export interface ITabListProps {
  categoryNames: string[];
  activeTabIdx: number;
  setActiveTabIdx: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPanelProps {
  menuList: TMenuList;
}

export type TMenuList = IMenuItemProps[];

export interface IMenuListProps {
  menuList: IMenuItemProps[];
}

export interface IMenuItemProps {
  name: string;
  price: number;
  imgUrl: string;
}

export interface ICategory {
  id: number;
  name: string;
  menuList: TMenuList;
}

export type ICategories = ICategory[];

export type TCategoryNameList = string[];
