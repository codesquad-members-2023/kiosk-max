package team04.kioskbe.order.repository;

import team04.kioskbe.order.domain.Order;

public interface OrderRepository {

    long save(Order order);
    Order findById(long orderId);

}
