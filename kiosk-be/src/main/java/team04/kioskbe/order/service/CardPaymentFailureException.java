package team04.kioskbe.order.service;

public class CardPaymentFailureException extends RuntimeException {

    private static final String ERROR_MESSAGE = "카드 결제에 실패했습니다.\n다른 카드로 다시 시도해주세요.";
    public CardPaymentFailureException() {
        super(ERROR_MESSAGE);
    }
}
