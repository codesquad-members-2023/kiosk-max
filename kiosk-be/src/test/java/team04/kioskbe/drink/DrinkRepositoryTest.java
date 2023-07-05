package team04.kioskbe.drink;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import team04.kioskbe.domain.Category;
import team04.kioskbe.domain.Drink;
import team04.kioskbe.domain.Option;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
@Transactional
public class DrinkRepositoryTest {
    @Autowired
    DrinkRepository drinkRepository;
    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Test
    @DisplayName("카테고리로 음료 목록 조회시 해당하는 음료 목록을 당일 판매수량 기준으로 정렬하여 반환한다.")
    public void findByCategoryTest() {
        //given
        String orderInfoInsert = "INSERT INTO order_info(payment_type, total_amount, received_amount) VALUES ('Cash', 8000, 8000), ('Cash', 4000, 4000), ('Card', 8000, 8000);";
        String orderDrinkInsert = "INSERT INTO order_drink(order_id, drink_id, quantity, order_price) VALUES (1,4, 2, 8000), (1,4, 1, 4000), (1,1, 4, 8000);";
        namedParameterJdbcTemplate.update(orderInfoInsert, new MapSqlParameterSource());
        namedParameterJdbcTemplate.update(orderDrinkInsert, new MapSqlParameterSource());

        String category = "coffee";

        //when
        List<Drink> drinkList = drinkRepository.findByCategory(category);

        //then
        Drink americano = Drink.builder()
                .id(1L)
                .img("imgurl1")
                .name("아메리카노")
                .price(3000)
                .category(Category.COFFEE)
                .totalQuantity(4)
                .build();
        americano.getOptions().add(new Option(1L, "사이즈", "S"));
        americano.getOptions().add(new Option(2L, "사이즈", "M"));
        americano.getOptions().add(new Option(3L, "사이즈", "L"));
        americano.getOptions().add(new Option(4L, "온도", "Hot"));
        americano.getOptions().add(new Option(5L, "온도", "Ice"));

        Drink coldbrew = Drink.builder()
                .id(4L)
                .img("imgurl4")
                .name("카페모카")
                .price(4000)
                .category(Category.COFFEE)
                .totalQuantity(3)
                .build();

        Drink drink1 = drinkList.get(0);
        assertThat(drink1.getId()).isEqualTo(americano.getId());
        assertThat(drink1.getName()).isEqualTo(americano.getName());
        assertThat(drink1.getImg()).isEqualTo(americano.getImg());
        assertThat(drink1.getCategory()).isEqualTo(americano.getCategory());
        assertThat(drink1.getPrice()).isEqualTo(americano.getPrice());

        for (int i = 0; i < drink1.getOptions().size(); i++) {
            assertThat(drink1.getOptions().get(i).getId()).isEqualTo(americano.getOptions().get(i).getId());
            assertThat(drink1.getOptions().get(i).getType()).isEqualTo(americano.getOptions().get(i).getType());
            assertThat(drink1.getOptions().get(i).getValue()).isEqualTo(americano.getOptions().get(i).getValue());
        }

        Drink drink2 = drinkList.get(1);
        assertThat(drink2.getId()).isEqualTo(coldbrew.getId());
        assertThat(drink2.getName()).isEqualTo(coldbrew.getName());
        assertThat(drink2.getImg()).isEqualTo(coldbrew.getImg());
        assertThat(drink2.getCategory()).isEqualTo(coldbrew.getCategory());
        assertThat(drink2.getPrice()).isEqualTo(coldbrew.getPrice());
        assertThat(drink2.getOptions().size()).isEqualTo(0);
    }
}
