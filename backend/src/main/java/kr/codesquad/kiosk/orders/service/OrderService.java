package kr.codesquad.kiosk.orders.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.codesquad.kiosk.exception.BusinessException;
import kr.codesquad.kiosk.exception.ErrorCode;
import kr.codesquad.kiosk.orders.controller.dto.OrderItemResponse;
import kr.codesquad.kiosk.orders.controller.dto.OrdersResponse;
import kr.codesquad.kiosk.orders.controller.dto.request.OrderReceiptRequest;
import kr.codesquad.kiosk.orders.controller.dto.response.OrderReceiptResponse;
import kr.codesquad.kiosk.orders.controller.dto.response.OrdersIdResponse;
import kr.codesquad.kiosk.orders.repository.OrderRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class OrderService {
	private final OrderRepository orderRepository;

	@Transactional(readOnly = true)
	public OrderReceiptResponse getReceipt(Integer orderId) {
		OrdersResponse ordersResponse = orderRepository.findOrdersResponseByOrderId(orderId)
			.orElseThrow(() -> new BusinessException(ErrorCode.ORDER_NOT_FOUND));
		List<OrderItemResponse> itemResponses = orderRepository.findOrderItemResponsesByOrderId(orderId);

		return OrderReceiptResponse.from(itemResponses, ordersResponse);
	}

	@Transactional
	public OrdersIdResponse createOrder(OrderReceiptRequest request) {
		return new OrdersIdResponse(
			orderRepository.save(request.toOrders())
		);
	}
}
