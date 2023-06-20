package kr.codesquad.kiosk.domain;

import java.time.LocalDateTime;

import lombok.Getter;

@Getter
public class Orders {
	private int id;
	private int amount;
	private int total;
	private int change;
	private LocalDateTime orderDate;
	private int paymentId;
}
