export type TabMockDataType = string;
export type TabButtonProps = {
  selectedTab: TabMockDataType | "";
  label: string;
  onClick: () => void;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  isSignature: boolean;
};
export type MenuListType = Record<TabMockDataType, Product[]>;
