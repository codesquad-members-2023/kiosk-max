package team6.codesquad.kiosk.order.repository;

import javax.sql.DataSource;

import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import team6.codesquad.kiosk.order.domain.Order;

@Repository
public class OrderRepository {
	private NamedParameterJdbcTemplate jdbcTemplate;
	private SimpleJdbcInsert jdbcInsert;

	public OrderRepository(DataSource dataSource) {
		this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
		this.jdbcInsert = new SimpleJdbcInsert(dataSource)
			.withTableName("orders")
			.usingColumns("total_amount", "received_amount", "changes", "payment_id", "order_status_id")
			.usingGeneratedKeyColumns("id");
	}

	public int save(Order order) {
		return jdbcInsert.executeAndReturnKey(new BeanPropertySqlParameterSource(order)).intValue();
	}
}
