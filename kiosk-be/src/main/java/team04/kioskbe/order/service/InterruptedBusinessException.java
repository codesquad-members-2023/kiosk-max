package team04.kioskbe.order.service;

public class InterruptedBusinessException extends RuntimeException {

    private static final String ERROR_MESSAGE = "서버에 문제가 발생했습니다.\n관리자에게 문의하세요.";
    public InterruptedBusinessException() {
        super(ERROR_MESSAGE);
    }
}
