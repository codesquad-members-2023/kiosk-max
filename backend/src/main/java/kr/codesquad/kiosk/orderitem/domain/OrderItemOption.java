package kr.codesquad.kiosk.orderitem.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Getter
@Builder
public class OrderItemOption {
	private int id;
	private int optionsId;
	private int orderItemId;

	public OrderItemOption giveOrderItemId(int orderItemId) {
		this.orderItemId = orderItemId;
		return this;
	}
}
