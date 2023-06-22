export type TabMockDataType = "커피" | "라떼" | "티" | "쥬스" | "디카페인";

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

export type NavigationProps = {
  selectedTab: TabMockDataType | "";
  handleTabClick: (label: TabMockDataType) => void;
};
