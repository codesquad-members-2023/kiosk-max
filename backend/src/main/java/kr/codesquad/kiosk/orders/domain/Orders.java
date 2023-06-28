package kr.codesquad.kiosk.orders.domain;

import java.time.LocalDateTime;
import java.util.List;

import kr.codesquad.kiosk.orderitem.domain.OrderItem;
import kr.codesquad.kiosk.payment.domain.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Getter
@Builder
public class Orders {
	private int id;
	private int amount;
	private int total;
	private int remain;
	private LocalDateTime orderDate;
	private int paymentId;

	private List<OrderItem> orderItems;

	public void calculatePriceInfo(int total) {
		if (paymentId != PaymentType.CASH_PAYMENT.getId())
			return;

		this.total = total;
		if (amount != 0 && amount >= total) {
			remain = amount - total;
		}
	}
}
