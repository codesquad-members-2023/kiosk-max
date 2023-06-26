interface ResultPageProps {
  changePage: (path: Path) => void;
}

export default function Result({ changePage }: ResultPageProps) {
  return <></>;
}

interface ReceiptProps {
  menus: (Menu & { quantity: number })[];
  inputAmount: number;
  totalPrice: number;
  change: number;
  paymentType: "현금" | "카드";
  changePage: (path: Path) => void;
}

function Receipt(props: ReceiptProps) {}

interface ErrorPageProps {
  changePage: (path: Path) => void;
}

function ErrorPage(props: ErrorPageProps) {}
