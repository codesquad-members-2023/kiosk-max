package kr.codesquad.kiosk.orders.controller;

import kr.codesquad.kiosk.orders.controller.dto.response.OrderReceiptResponse;
import kr.codesquad.kiosk.orders.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class OrderController {
	private final OrderService orderService;

	@GetMapping("/api/orders/{orderId}")
	public ResponseEntity<OrderReceiptResponse> getReceipt(@PathVariable Integer orderId) {
		return ResponseEntity.ok()
				.body(orderService.getReceipt(orderId));
	}
}
