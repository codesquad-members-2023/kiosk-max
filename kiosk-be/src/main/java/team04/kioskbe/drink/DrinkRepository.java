package team04.kioskbe.drink;

import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import team04.kioskbe.domain.Category;
import team04.kioskbe.domain.Drink;
import team04.kioskbe.domain.Option;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class DrinkRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public DrinkRepository(DataSource dataSource) {
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<Drink> findByCategory(String category) {
        String sql = "SELECT d.id, d.name, d.img, d.price, d.type AS category, do.type, do.value, do.id AS option_id, IFNULL(SUM(od.quantity), 0) AS daily_sold_quantity, " +
                "(SELECT IFNULL(SUM(quantity), 0) FROM order_drink WHERE drink_id = d.id) AS total_sold_quantity " +
                "FROM drink d " +
                "LEFT JOIN available_option ao ON d.id = ao.drink_id " +
                "LEFT JOIN drink_option do ON ao.option_id = do.id " +
                "LEFT JOIN order_drink od ON d.id = od.drink_id " +
                "LEFT JOIN order_info oi ON od.order_id = oi.id AND oi.order_date = CURDATE() " +
                "WHERE d.type = :category " +
                "GROUP BY d.id, d.name, d.img, d.price, do.type, do.value, do.id " +
                "ORDER BY daily_sold_quantity DESC, id,option_id";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("category", category);

        return namedParameterJdbcTemplate.query(sql, params, new DrinkListResultSetExtractor());
    }

    public static class DrinkListResultSetExtractor implements ResultSetExtractor<List<Drink>> {
        @Override
        public List<Drink> extractData(ResultSet rs) throws SQLException {
            List<Drink> drinkList = new ArrayList<>();
            Map<Long, Drink> drinkMap = new HashMap<>();
            while (rs.next()) {
                Long id = rs.getLong("id");
                if (!drinkMap.containsKey(id)) {
                    Drink newDrink = Drink.builder()
                            .id(id)
                            .name(rs.getString("name"))
                            .img(rs.getString("img"))
                            .price(rs.getInt("price"))
                            .category(Category.findCategory(rs.getString("category")))
                            .totalQuantity(rs.getInt("total_sold_quantity"))
                            .options(new ArrayList<>())
                            .build();
                    drinkMap.put(id, newDrink);
                    drinkList.add(newDrink);
                }
                Drink drink = drinkMap.get(id);

                long optionId = rs.getLong("option_id");
                if (optionId != 0) {
                    drink.getOptions().add(new Option(optionId,
                            rs.getString("type"), rs.getString("value")));
                }
            }
            return drinkList;
        }
    }

}
