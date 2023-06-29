package kr.codesquad.kiosk.payment.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum PaymentType {
	CARD_PAYMENT(1),
	CASH_PAYMENT(2);

	private final int id;

	public boolean isSamePaymentId(int paymentId) {
		return id == paymentId;
	}

}
