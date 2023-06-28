package kr.codesquad.kiosk.orders.repository;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import kr.codesquad.kiosk.orderitem.domain.OrderItem;
import kr.codesquad.kiosk.orderitem.domain.OrderItemOption;
import kr.codesquad.kiosk.orders.controller.dto.OrderItemResponse;
import kr.codesquad.kiosk.orders.controller.dto.OrdersResponse;
import kr.codesquad.kiosk.orders.domain.Orders;
import lombok.RequiredArgsConstructor;

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
		return jdbcTemplate.query("SELECT i.name, oi.item_quantity, oi.price AS price " +
				"FROM orders o " +
				"JOIN order_item oi ON o.id = oi.orders_id " +
				"JOIN item i ON oi.item_id = i.id " +
				"WHERE o.id = :orderId",
			Map.of("orderId", orderId),
			(rs, rowNum) -> new OrderItemResponse(
				rs.getString("name"),
				rs.getInt("item_quantity"),
				rs.getInt("price")
			));
	}

	public int save(Orders orders) {
		int orderId = saveOrderAndReturnId(orders);

		for (OrderItem orderItem : orders.getOrderItems()) {
			int orderItemId = saveOrderItem(orderItem.giveOrdersId(orderId));

			for (OrderItemOption orderItemOption : orderItem.getOrderItemOptions()) {
				saveOrderItemOption(orderItemOption.giveOrderItemId(orderItemId));
			}
		}

		return orderId;
	}

	private int saveOrderAndReturnId(Orders orders) {
		String sql = "insert into orders(amount, total, remain, order_date, payment_id) "
			+ "values(:amount, :total, :remain, now(), :paymentId)";
		SqlParameterSource sqlParameterSource = mappingOrderSqlParameterSource(orders);
		KeyHolder keyHolder = new GeneratedKeyHolder();

		jdbcTemplate.update(sql, sqlParameterSource, keyHolder);

		return Objects.requireNonNullElseGet(keyHolder.getKey(), () -> 0).intValue();
	}

	private int saveOrderItem(OrderItem orderItem) {
		String sql = "insert into order_item(item_quantity, price, item_id, orders_id) "
			+ "values(:itemQuantity, :price, :itemId, :ordersId)";
		SqlParameterSource sqlParameterSource = mappingOrderItemSqlParameterSource(orderItem);
		KeyHolder keyHolder = new GeneratedKeyHolder();

		jdbcTemplate.update(sql, sqlParameterSource, keyHolder);

		return Objects.requireNonNullElseGet(keyHolder.getKey(), () -> 0).intValue();
	}

	private void saveOrderItemOption(OrderItemOption orderItemOption) {
		String sql = "insert into order_item_option(options_id, order_item_id) "
			+ "values(:optionsId, :orderItemId)";
		SqlParameterSource sqlParameterSource = mappingOrderItemOptionSqlParameterSource(orderItemOption);

		jdbcTemplate.update(sql, sqlParameterSource);
	}

	private SqlParameterSource mappingOrderSqlParameterSource(Orders orders) {
		return new MapSqlParameterSource()
			.addValue("amount", orders.getAmount())
			.addValue("total", orders.getTotal())
			.addValue("remain", orders.getRemain())
			.addValue("paymentId", orders.getPaymentId());
	}

	private SqlParameterSource mappingOrderItemSqlParameterSource(OrderItem orderItem) {
		return new MapSqlParameterSource()
			.addValue("itemQuantity", orderItem.getItemQuantity())
			.addValue("price", orderItem.getPrice())
			.addValue("itemId", orderItem.getItemId())
			.addValue("ordersId", orderItem.getOrdersId());
	}

	private SqlParameterSource mappingOrderItemOptionSqlParameterSource(OrderItemOption orderItemOption) {
		return new MapSqlParameterSource()
			.addValue("optionsId", orderItemOption.getOptionsId())
			.addValue("orderItemId", orderItemOption.getOrderItemId());
	}

}
