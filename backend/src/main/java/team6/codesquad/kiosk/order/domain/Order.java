package team6.codesquad.kiosk.order.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Order {
	private Integer id;
	private int totalAmount;
	private Integer orderStatusId;
	private int receivedAmount;
	private int changes;
	private Integer paymentId;

	public Order(int totalAmount, int orderStatusId, int receivedAmount, int changes, int paymentId) {
		this(null, totalAmount, orderStatusId, receivedAmount, changes, paymentId);
	}

}
