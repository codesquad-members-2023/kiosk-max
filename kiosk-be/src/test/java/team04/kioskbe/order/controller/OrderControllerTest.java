package team04.kioskbe.order.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;
import team04.kioskbe.domain.Option;
import team04.kioskbe.order.domain.OrderDrink;
import team04.kioskbe.order.domain.Payment;
import team04.kioskbe.order.service.OrderService;
import team04.kioskbe.order.service.dto.OrderRequest;

import java.util.Collections;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@Transactional
@SpringBootTest
class OrderControllerTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    NamedParameterJdbcTemplate jdbcTemplate;
    @Autowired
    OrderService orderService;

    @Test
    @DisplayName("getPayments(): 결제 목록을 요청하면 JSON 형식으로 반환한다.")
    void getPayments() throws Exception {
        // given when then
        mockMvc.perform(get("/orders/payments").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("*.name").exists())
                .andExpect(MockMvcResultMatchers.jsonPath("*.img").exists())
                .andExpect(MockMvcResultMatchers.jsonPath("*").isArray())
                .andDo(print());
    }

    @Test
    @DisplayName("saveOrder(): 주문 요청을 처리하고 Location 헤더에 리다이렉트 url을 담아서 반환한다.")
    void saveOrder() throws Exception {
        // given
        String drinks = "SELECT id FROM drink";
        List<Long> drinksId = jdbcTemplate.queryForList(drinks, Collections.emptyMap(), Long.class);

        String options = "SELECT * FROM drink_option WHERE id=1 AND id=4";
        List<Option> option = jdbcTemplate.queryForList(options, Collections.emptyMap(), Option.class);

        OrderDrink orderDrink1 = new OrderDrink(drinksId.get(0), "아메리카노", 5, 20000, option);
        OrderDrink orderDrink2 = new OrderDrink(drinksId.get(1), "콜드브루", 2, 10000, option);

        OrderRequest order = new OrderRequest(30000, 30000, Payment.CASH.name(), List.of(orderDrink1, orderDrink2));

        // when then
        mockMvc.perform(post("/orders")
                .param("payments", "cash")
                .content(objectMapper.writeValueAsString(order))
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(header().exists(HttpHeaders.LOCATION));
    }

    @Test
    @DisplayName("findOrderById(): ")
    void findOrderById() throws Exception {
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
        mockMvc.perform(get("/orders/" + orderId))
                .andExpect(jsonPath("dailyOrderId").exists())
                .andExpect(jsonPath("drinks").isArray())
                .andExpect(jsonPath("drinks.*.name").exists())
                .andExpect(jsonPath("drinks.*.quantity").exists())
                .andExpect(jsonPath("payment").value(Payment.CASH.getName()))
                .andExpect(jsonPath("receivedAmount").value(30000))
                .andExpect(jsonPath("totalAmount").value(30000))
                .andExpect(jsonPath("change").value(0))
                .andDo(print());
    }

}
