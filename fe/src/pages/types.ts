type MenuId = number;
type CategoryId = number;

export interface Menus {
  [key: MenuId]: MenuInfo;
}

export interface Categories {
  [key: CategoryId]: CategoryInfo;
}

export interface MenuInfo {
  name: string;
  menuId: number;
  price: number;
  imgUrl: string;
  isBest?: boolean;
  hasLarge: boolean | undefined;
  hasSmall: boolean | undefined;
  hasHot: boolean | undefined;
  hasIce: boolean | undefined;
}

export interface CategoryInfo {
  categoryName: string;
  categoryId: number;
  menus: MenuInfo[];
}

export interface MenuOrder {
  menuId: number;
  size: string;
  temperature: string;
  amount: number;
}

interface OrderList {
  orderItems: MenuOrder[];
  totalPrice: number;
}

export interface OrderSuccessInfo {
  orderId: number;
  orderNumber: number;
  orderItems: OrderItem[];
  paymentMethod: string;
  totalPrice: number;
  receivedPrice: number;
  remainedPrice: number;
  orderDatetime: string;
}

interface OrderResult {
  success: boolean;
  errorCode: { status: number; code: string; message: string };
}

export interface OrderItem {
  name: string;
  size: string;
  temperature: string;
  amount: number;
}
