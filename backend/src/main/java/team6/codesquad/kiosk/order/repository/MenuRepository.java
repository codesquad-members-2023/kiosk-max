package team6.codesquad.kiosk.order.repository;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import team6.codesquad.kiosk.order.dto.response.CategoryResponseDto;
import team6.codesquad.kiosk.order.dto.response.MenuResponseDto;

@Repository
public class MenuRepository {
	private final JdbcTemplate jdbcTemplate;
	private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	public MenuRepository(JdbcTemplate template, NamedParameterJdbcTemplate parameterJdbcTemplate) {
		jdbcTemplate = template;
		namedParameterJdbcTemplate = parameterJdbcTemplate;
	}

	private RowMapper<CategoryResponseDto> categoryRowMapper() {
		return (rs, rowNum) -> {
			CategoryResponseDto categoryResponseDto = new CategoryResponseDto();
			categoryResponseDto.setId(rs.getInt("id"));
			categoryResponseDto.setName(rs.getString("name"));
			categoryResponseDto.setMenus(findAllMenuByCategoryId(rs.getInt("id")));

			return categoryResponseDto;
		};
	}

	private RowMapper<MenuResponseDto> menuRowMapper() {
		return (rs, rowNum) -> {
			MenuResponseDto menuResponseDto = new MenuResponseDto();
			menuResponseDto.setId(rs.getInt("id"));
			menuResponseDto.setName(rs.getString("name"));
			menuResponseDto.setPrice(rs.getInt("price"));
			menuResponseDto.setImage(rs.getString("image"));
			menuResponseDto.setCategoryId(rs.getInt("category_id"));

			return menuResponseDto;
		};
	}

	public List<CategoryResponseDto> findAll() {
		return jdbcTemplate.query("select * from category", categoryRowMapper());
	}

	// TODO: Sales 테이블에서 오늘 날짜(date)에 해당하는 menu들을 모아서 count별로 정렬 후, 카테고리 별로 나눠 List에 담는다.
	public List<MenuResponseDto> findAllMenuByCategoryId(int categoryId) {
		return jdbcTemplate.query("select * from menu where category_id = ?", menuRowMapper(), categoryId);
	}

	public int findByName(String name) {
		String sql = "SELECT id FROM menu WHERE name = :name";
		SqlParameterSource namedParameters = new MapSqlParameterSource("name", name);
		return namedParameterJdbcTemplate.queryForObject(sql, namedParameters, Integer.class);
	}
}
