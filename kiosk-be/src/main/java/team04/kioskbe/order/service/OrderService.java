package team04.kioskbe.order.service;

import java.util.List;
import org.springframework.stereotype.Service;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.Payment;
import team04.kioskbe.order.repository.OrderRepository;
import team04.kioskbe.order.repository.OrderSequence;
import team04.kioskbe.order.service.dto.OrderRequest;
import team04.kioskbe.order.service.dto.OrderResponse;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderSequence orderSequence;

    public OrderService(OrderRepository orderRepository, OrderSequence orderSequence) {
        this.orderRepository = orderRepository;
        this.orderSequence = orderSequence;
    }

    public List<Payment> getPayments() {
        return Payment.getPayments();
    }

    public long payByCash(OrderRequest orderRequest) {
        Order order = orderRequest.toEntity();
        return orderRepository.save(order);
    }

    public OrderResponse findOrderById(long orderId) {
        final Order order = orderRepository.findById(orderId);
        return OrderResponse.from(order, orderSequence.createDailyOrderId());
    }

    public long payByCard(OrderRequest orderRequest) {
        awaitPayment();
        decidePaymentStatus();
        Order order = orderRequest.toEntity();
        return orderRepository.save(order);
    }

    private static void awaitPayment() {
        try {
            final int randomNumber = (int) (Math.random() * 4000);
            final int sleepTime = randomNumber + 3000;
            Thread.sleep(sleepTime);
        } catch (InterruptedException e) {
            throw new InterruptedBusinessException();
        }
    }

    private static void decidePaymentStatus() {
        if (Math.random() > 0.8) {
            throw new CardPaymentFailureException();
        }
    }
}
