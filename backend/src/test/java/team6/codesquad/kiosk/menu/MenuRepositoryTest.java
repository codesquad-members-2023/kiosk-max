package team6.codesquad.kiosk.menu;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;

import team6.codesquad.kiosk.order.dto.response.MenuResponseDto;
import team6.codesquad.kiosk.order.repository.MenuRepository;

@JdbcTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Sql("classpath:schema.sql")
public class MenuRepositoryTest {
	MenuRepository menuRepository;
	@Autowired
	JdbcTemplate jdbcTemplate;
	MenuResponseDto menuResponseDto;

	@BeforeEach
	public void set() {
		menuRepository = new MenuRepository(jdbcTemplate.getDataSource());
		menuResponseDto = new MenuResponseDto(17, "아메리카노(디카프)", 3500, "이미지", 5);
	}

	@Test
	@DisplayName("카테고리 아이디와 일치하는 메뉴를 반환한다.")
	void findAllMenuByCategoryId() {
		assertThat(menuRepository.findAllMenuByCategoryId(5).stream().findFirst().get())
			.isEqualToComparingFieldByField(menuResponseDto);
	}

	@Test
	@DisplayName("모든 카테고리를 반환할 때, 메뉴가 포함되어있는지 확인")
	void findAll() {
		menuRepository.findAll()
			.forEach(categoryResponseDto -> {
				assertThat(categoryResponseDto.getMenuResponseDtos()).isNotEmpty();
			});
	}
}
