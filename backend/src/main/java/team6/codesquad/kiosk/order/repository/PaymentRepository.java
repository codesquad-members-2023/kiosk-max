package team6.codesquad.kiosk.order.repository;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Repository
public class PaymentRepository {
	private final NamedParameterJdbcTemplate jdbcTemplate;

	public int findByName(String name) {

		// public int countOfActorsByFirstName(String firstName) {
		// 	String sql = "select count(*) from T_ACTOR where first_name = :first_name";
		// 	SqlParameterSource namedParameters = new MapSqlParameterSource("first_name", firstName);
		// 	return this.namedParameterJdbcTemplate.queryForObject(sql, namedParameters, Integer.class);
		// }

		String sql = "SELECT id FROM payment WHERE name = :name";
		SqlParameterSource namedParameters = new MapSqlParameterSource("name", name);
		return jdbcTemplate.queryForObject(sql, namedParameters, Integer.class);
	}
}
