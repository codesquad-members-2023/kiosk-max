package kr.codesquad.kiosk.orders.repository;

import kr.codesquad.kiosk.orders.controller.dto.OrderItemResponse;
import kr.codesquad.kiosk.orders.controller.dto.OrdersResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class OrderRepository {
	private final NamedParameterJdbcTemplate jdbcTemplate;

	public Optional<OrdersResponse> findOrdersResponseByOrderId(Integer orderId) {
		try {
			return Optional.ofNullable(
					jdbcTemplate.queryForObject("SELECT p.name, o.amount, o.total, o.remain " +
									"FROM orders o " +
									"JOIN payment p ON o.payment_id = p.id " +
									"WHERE o.id = :orderId",
							Map.of("orderId", orderId),
							(rs, rowNum) -> new OrdersResponse(
									rs.getString("name"),
									rs.getInt("amount"),
									rs.getInt("total"),
									rs.getInt("remain")
							)
					)
			);
		} catch (EmptyResultDataAccessException ex) {
			return Optional.empty();
		}
	}

	public List<OrderItemResponse> findOrderItemResponsesByOrderId(Integer orderId) {
		return jdbcTemplate.query("SELECT i.name, oi.item_quantity " +
						"FROM orders o " +
						"JOIN order_item oi ON o.id = oi.orders_id " +
						"JOIN item i ON oi.item_id = i.id " +
						"WHERE o.id = :orderId",
				Map.of("orderId", orderId),
				(rs, rowNum) -> new OrderItemResponse(
						rs.getString("name"),
						rs.getInt("item_quantity")
				));
	}
}
