package team04.kioskbe.drink;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team04.kioskbe.domain.Category;
import team04.kioskbe.domain.Drink;
import team04.kioskbe.domain.Option;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class DrinkServiceTest {
    @Autowired
    DrinkService drinkService;

    @Test
    @DisplayName("카테고리 목록을 조회하면 카테고리 목록을 반환한다.")
    public void getCategoriesTest() {
        //given

        //when
        List<CategoryResponse> categoryResponseList = drinkService.getCategories();

        //then
        List<CategoryResponse> expectedList = new ArrayList<>();
        expectedList.add(new CategoryResponse("coffee", "커피"));
        expectedList.add(new CategoryResponse("latte", "라떼"));
        expectedList.add(new CategoryResponse("tea", "티"));
        expectedList.add(new CategoryResponse("juice", "쥬스"));
        expectedList.add(new CategoryResponse("decaffeine", "디카페인"));

        for (int i = 0; i < expectedList.size(); i++) {
            assertThat(categoryResponseList.get(i).getId()).isEqualTo(expectedList.get(i).getId());
            assertThat(categoryResponseList.get(i).getName()).isEqualTo(expectedList.get(i).getName());
        }
    }

    @Test
    @DisplayName("카테고리에 해당하는 음료 목록을 조회하고 DrinkResponse 리스트로 반환한다.")
    public void getDrinksTest() {
        // given
        String category = "coffee";

        // when
        List<DrinkResponse> drinkResponseList = drinkService.getDrinks(category);

        // then
        // 조회한 음료 데이터 확인
        assertThat(drinkResponseList).hasSize(4);

        assertThat(drinkResponseList.get(0)).usingRecursiveComparison()
                .isEqualTo(DrinkResponse.from(Drink.builder()
                        .id(1L)
                        .name("아메리카노")
                        .img("imgurl1")
                        .price(3000)
                        .category(Category.COFFEE)
                        .options(Arrays.asList(
                                new Option(1L, "size", "S"),
                                new Option(2L, "size", "M"),
                                new Option(3L, "size", "L"),
                                new Option(4L, "temperature", "Hot"),
                                new Option(5L, "temperature", "Ice")
                        ))
                        .build()));

        assertThat(drinkResponseList.get(1)).usingRecursiveComparison()
                .isEqualTo(DrinkResponse.from(Drink.builder()
                        .id(2L)
                        .name("콜드브루")
                        .img("imgurl2")
                        .price(2000)
                        .category(Category.COFFEE)
                        .options(new ArrayList<>())
                        .build()));
    }
}
