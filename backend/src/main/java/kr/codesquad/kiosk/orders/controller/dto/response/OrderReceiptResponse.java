package kr.codesquad.kiosk.orders.controller.dto.response;

import kr.codesquad.kiosk.orders.controller.dto.OrderItemResponse;
import kr.codesquad.kiosk.orders.controller.dto.OrdersResponse;

import java.util.List;

public record OrderReceiptResponse(
		List<OrderItemResponse> items,
		String payments,
		Integer amount,
		Integer total,
		Integer remain
) {
	public static OrderReceiptResponse from(List<OrderItemResponse> items, OrdersResponse ordersResponse) {
		return new OrderReceiptResponse(
				items,
				ordersResponse.payments(),
				ordersResponse.amount(),
				ordersResponse.total(),
				ordersResponse.remain()
		);
	}
}
