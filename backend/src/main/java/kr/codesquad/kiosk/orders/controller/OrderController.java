package kr.codesquad.kiosk.orders.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.codesquad.kiosk.orders.controller.dto.request.OrderReceiptRequest;
import kr.codesquad.kiosk.orders.controller.dto.response.OrderReceiptResponse;
import kr.codesquad.kiosk.orders.controller.dto.response.OrdersIdResponse;
import kr.codesquad.kiosk.orders.service.OrderService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/orders")
public class OrderController {
	private final OrderService orderService;

	@GetMapping("/{orderId}")
	public ResponseEntity<OrderReceiptResponse> getReceipt(@PathVariable Integer orderId) {
		return ResponseEntity.ok()
			.body(orderService.getReceipt(orderId));
	}

	@PostMapping
	public ResponseEntity<OrdersIdResponse> createOrder(@RequestBody OrderReceiptRequest request) {
		return ResponseEntity.ok()
			.body(orderService.createOrder(request));
	}
}
