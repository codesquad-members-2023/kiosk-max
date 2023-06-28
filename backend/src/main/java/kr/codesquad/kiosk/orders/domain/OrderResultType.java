package kr.codesquad.kiosk.orders.domain;

public enum OrderResultType {
	SUCCESS,
	NETWORK_ERROR,
	CARD_LIMIT_EXCEEDED,
	MAGNETIC_NOT_RECOGNIZED,
	RESPONSE_DELAY
}
