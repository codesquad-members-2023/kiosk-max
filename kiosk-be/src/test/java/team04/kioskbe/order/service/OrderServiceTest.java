package team04.kioskbe.order.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import team04.kioskbe.domain.Option;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.OrderDrink;
import team04.kioskbe.order.domain.Payment;
import team04.kioskbe.order.repository.OrderRepository;
import team04.kioskbe.order.service.dto.OrderDrinkResponse;
import team04.kioskbe.order.service.dto.OrderRequest;
import team04.kioskbe.order.service.dto.OrderResponse;

import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

@SpringBootTest
class OrderServiceTest {

    @Autowired
    OrderRepository orderRepository;
    @Autowired
    OrderService orderService;
    @Autowired
    NamedParameterJdbcTemplate jdbcTemplate;

    @Test
    @DisplayName("getPayments(): 결제 수단 목록을 반환한다.")
    void getPayments() {
        // given

        // when
        List<Payment> payments = orderService.getPayments();

        // then
        assertThat(payments).containsExactlyInAnyOrder(Payment.CARD, Payment.CASH);
    }

    @Test
    @DisplayName("save(): 주문 요청을 데이터베이스에 저장하고 id를 반환한다.")
    void save() {
        // given
        String drinks = "SELECT id FROM drink";
        List<Long> drinksId = jdbcTemplate.queryForList(drinks, Collections.emptyMap(), Long.class);

        String options = "SELECT * FROM drink_option WHERE id=1 AND id=4";
        List<Option> option = jdbcTemplate.queryForList(options, Collections.emptyMap(), Option.class);

        OrderDrink orderDrink1 = new OrderDrink(drinksId.get(0), "아메리카노", 5, 20000, option);
        OrderDrink orderDrink2 = new OrderDrink(drinksId.get(1), "콜드브루", 2, 10000, option);


        OrderRequest order = new OrderRequest(30000, 30000, Payment.CASH.name(), List.of(orderDrink1, orderDrink2));

        // when
        long orderId = orderService.payByCash(order);

        // then
        Order findOrder = orderRepository.findById(orderId);
        assertAll(() -> assertThat(findOrder.getTotalAmount()).isEqualTo(30000),
                () -> assertThat(findOrder.getReceivedAmount()).isEqualTo(30000),
                () -> assertThat(findOrder.getPayment()).isEqualTo(Payment.CASH),
                () -> assertThat(findOrder.getDrinks().size()).isEqualTo(2));
    }

    @Test
    @DisplayName("findOrderById(): 주문 번호로 조회하여 영수증 정보를 반환한다.")
    void findOrderById() {
        // given
        String options = "SELECT * FROM drink_option WHERE id IN (1, 4)";
        List<Option> option = jdbcTemplate.query(options, Collections.emptyMap(), BeanPropertyRowMapper.newInstance(Option.class));

        OrderDrink orderDrink1 = new OrderDrink(1L, "americano", 5, 20000, option);
        OrderDrink orderDrink2 = new OrderDrink(2L, "coldbrew", 2, 10000, option);

        Order order = new Order(30000, 30000, Payment.CASH, List.of(orderDrink1, orderDrink2));

        long orderId = orderRepository.save(order);

        // when
        OrderResponse orderById = orderService.findOrderById(orderId);

        // then
        assertAll(() -> assertThat(orderById.getTotalAmount()).isEqualTo(30000),
                () -> assertThat(orderById.getReceivedAmount()).isEqualTo(30000),
                () -> assertThat(orderById.getPayment()).isEqualTo(Payment.CASH.getName()),
                () -> assertThat(orderById.getChange()).isEqualTo(0),
                () -> assertThat(orderById.getDrinks()).containsExactlyInAnyOrder(OrderDrinkResponse.from(orderDrink1, 1), OrderDrinkResponse.from(orderDrink2, 2)),
                () -> assertThat(orderById.getDailyOrderId()).isEqualTo(1));
    }

}
