package team04.kioskbe.order.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import team04.kioskbe.domain.Drink;
import team04.kioskbe.domain.Option;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.OrderDrink;
import team04.kioskbe.order.domain.Payment;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

@Transactional
@SpringBootTest
class OrderRepositoryTest {

    @Autowired
    OrderRepository orderRepository;
    @Autowired
    NamedParameterJdbcTemplate jdbcTemplate;

    @Test
    @DisplayName("save(): 주문을 저장하면 id를 반환한다.")
    void save() {
        // given
        List<Option> option = new ArrayList<>();
        option.add(new Option(1L, "hot"));
        option.add(new Option(2L, "cold"));

        OrderDrink orderDrink1 = new OrderDrink(1L, "americano", 5, 20000, option);
        OrderDrink orderDrink2 = new OrderDrink(2L, "coldbrew", 2, 10000, option);

        Order order = new Order(30000, 30000, Payment.CASH, List.of(orderDrink1, orderDrink2));

        // when
        long orderId = orderRepository.save(order);

        // then
        Order findOrder = orderRepository.findById(orderId);
        assertAll(() -> assertThat(findOrder.getTotalAmount()).isEqualTo(30000),
                  () -> assertThat(findOrder.getReceivedAmount()).isEqualTo(30000),
                  () -> assertThat(findOrder.getPayment()).isEqualTo(Payment.CASH),
                  () -> assertThat(findOrder.getDrinks()).containsExactlyInAnyOrder(orderDrink1, orderDrink2));
    }

}
