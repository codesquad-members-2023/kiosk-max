interface PaymentModalProps {
  selectCardPayment: () => void;
  selectCashPayment: () => void;
}

export function PaymentModal({ selectCardPayment, selectCashPayment }: PaymentModalProps) {}

interface PaymentSpinnerProps {
  requestPayment: () => void;
}

export function PaymentSpinner({ requestPayment }: PaymentSpinnerProps) {
  return;
}

interface CashPaymentModalProps {
  totalPrice: number;
  requestPayment: () => void;
}

export function CashPaymentModal({ totalPrice, requestPayment }: CashPaymentModalProps) {
  // 투입 얼마했는지 상태
}
