package kr.codesquad.kiosk.orders.controller.dto.request;

import java.util.List;

import kr.codesquad.kiosk.orders.domain.Orders;

public record OrderReceiptRequest(
	OrdersRequest orders,
	List<OrderItemRequest> orderItem
) {
	public Orders toOrders() {
		return Orders.builder()
			.amount(orders.amount())
			.paymentId(orders.paymentId())
			.orderItems(
				orderItem.stream()
					.map(OrderItemRequest::toOrderItem)
					.toList()
			)
			.build();
	}
}
