export type TabMockDataType = "커피" | "라떼" | "티" | "쥬스" | "디카페인";

export type TabButtonProps = {
  selectedTab: TabMockDataType | "";
  label: string;
  onClick: () => void;
};

export type Product = { name: string; price: number };

export type MockData = Record<TabMockDataType, Product[]>;

export interface ContentProps {
  selectedTab: TabMockDataType | "";
}

export type NavigationProps = {
  selectedTab: TabMockDataType | "";
  handleTabClick: (label: TabMockDataType) => void;
};
