package kr.codesquad.kiosk.orders.service;

import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.codesquad.kiosk.exception.BusinessException;
import kr.codesquad.kiosk.exception.ErrorCode;
import kr.codesquad.kiosk.orders.controller.dto.OrderItemResponse;
import kr.codesquad.kiosk.orders.controller.dto.OrdersResponse;
import kr.codesquad.kiosk.orders.controller.dto.request.OrderReceiptRequest;
import kr.codesquad.kiosk.orders.controller.dto.response.OrderReceiptResponse;
import kr.codesquad.kiosk.orders.controller.dto.response.OrdersIdResponse;
import kr.codesquad.kiosk.orders.domain.OrderResultType;
import kr.codesquad.kiosk.orders.repository.OrderRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class OrderService {
	private final OrderRepository orderRepository;
	private final Random random = new Random();

	@Transactional(readOnly = true)
	public OrderReceiptResponse getReceipt(Integer orderId) {
		OrdersResponse ordersResponse = orderRepository.findOrdersResponseByOrderId(orderId)
			.orElseThrow(() -> new BusinessException(ErrorCode.ORDER_NOT_FOUND));
		List<OrderItemResponse> itemResponses = orderRepository.findOrderItemResponsesByOrderId(orderId);

		return OrderReceiptResponse.from(itemResponses, ordersResponse);
	}

	@Transactional
	public OrdersIdResponse createOrder(OrderReceiptRequest request) {
		OrderResultType orderResultType = getRandomOrderResultType();
		if (orderResultType == OrderResultType.SUCCESS) {
			return new OrdersIdResponse(
				orderRepository.save(request.toOrders())
			);
		}

		throw getBusinessException(orderResultType);
	}

	private OrderResultType getRandomOrderResultType() {
		int randomInt = random.nextInt(10) + 1;

		switch (randomInt) {
			case 1, 2, 3, 4, 5, 6, 7 -> {
				return OrderResultType.SUCCESS;
			}
			case 8 -> {
				return OrderResultType.NETWORK_ERROR;
			}
			case 9 -> {
				return OrderResultType.CARD_LIMIT_EXCEEDED;
			}
			default -> {
				return OrderResultType.MAGNETIC_NOT_RECOGNIZED;
			}
		}
	}

	private BusinessException getBusinessException(OrderResultType orderResultType) {
		switch (orderResultType) {
			case CARD_LIMIT_EXCEEDED -> {
				return new BusinessException(ErrorCode.CARD_LIMIT_EXCEEDED_ERROR);
			}
			case MAGNETIC_NOT_RECOGNIZED -> {
				return new BusinessException(ErrorCode.MAGNETIC_NOT_RECOGNIZED_ERROR);
			}
			default -> {
				return new BusinessException(ErrorCode.NETWORK_FAIN_ERROR);
			}
		}
	}

}
