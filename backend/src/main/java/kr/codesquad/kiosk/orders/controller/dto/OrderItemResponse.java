package kr.codesquad.kiosk.orders.controller.dto;

public record OrderItemResponse(
	String name,
	Integer quantity,
	Integer price
) {
}
