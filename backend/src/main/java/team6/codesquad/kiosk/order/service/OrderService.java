package team6.codesquad.kiosk.order.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import team6.codesquad.kiosk.order.controller.dto.OrderRequest;
import team6.codesquad.kiosk.order.domain.Order;
import team6.codesquad.kiosk.order.repository.OrderRepository;
import team6.codesquad.kiosk.order.repository.OrderStatusRepository;
import team6.codesquad.kiosk.order.repository.PaymentRepository;

@RequiredArgsConstructor
@Transactional
@Service
public class OrderService {

	private final OrderRepository repository;
	private final OrderStatusRepository statusRepository;
	private final PaymentRepository paymentRepository;

	public void saveOrder(OrderRequest orderRequest) {
		int totalAmount = orderRequest.getTotalAmount();
		int receivedAmount = orderRequest.getReceivedAmount();
		int change = receivedAmount - totalAmount;
		Order order = new Order(totalAmount, statusRepository.findByName("success"), receivedAmount, change,
			paymentRepository.findByName(orderRequest.getPaymentType()));
		repository.save(order);
	}
}
