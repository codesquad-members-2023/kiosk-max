package kr.codesquad.kiosk.orders.domain;

import java.util.Random;

public enum OrderResultType {
	SUCCESS,
	NETWORK_ERROR,
	CARD_LIMIT_EXCEEDED,
	MAGNETIC_NOT_RECOGNIZED,
	RESPONSE_DELAY;

	private static final Random random = new Random();

	public static OrderResultType getRandomOrderResultType() {
		int randomInt = random.nextInt(10) + 1;

		switch (randomInt) {
			case 1, 2, 3, 4, 5, 6, 7 -> {
				return OrderResultType.SUCCESS;
			}
			case 8 -> {
				return OrderResultType.NETWORK_ERROR;
			}
			case 9 -> {
				return OrderResultType.CARD_LIMIT_EXCEEDED;
			}
			default -> {
				return OrderResultType.MAGNETIC_NOT_RECOGNIZED;
			}
		}
	}
}
