package com.codesquad.kiosk.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.codesquad.kiosk.domain.Order;
import com.codesquad.kiosk.domain.OrderMenu;
import com.codesquad.kiosk.dto.ReceiptOrderNumberDto;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class OrderRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public Optional<Order> getOrder() {
        String sql = "SELECT ORDER_TIME, ORDER_NUMBER FROM ORDERS WHERE id = (SELECT MAX(id) FROM ORDERS)";
        List<Order> list = namedParameterJdbcTemplate.query(sql,orderRowMapper());
        return list.stream().findFirst();
    }

    public int insertOrder (int orderNumber) {
        // Orders Insert
        String insertOrderQuery = "INSERT INTO ORDERS(ORDER_NUMBER) VALUES(:order_number)";
        SqlParameterSource orderParameters = new MapSqlParameterSource("order_number", orderNumber);
        KeyHolder orderKeyHolder = new GeneratedKeyHolder();
        namedParameterJdbcTemplate.update(insertOrderQuery, orderParameters, orderKeyHolder);
        return  orderKeyHolder.getKey().intValue();
    }

    @Transactional
    public void saveOrder( int orderId ,OrderMenu orderMenu, int[] optionList) {

        // OrderMenu Insert
        String insertMenuOrderQuery = "INSERT INTO ORDER_MENU(ORDER_ID, MENU_ID, QUANTITY) VALUES(:order_id, :menu_id, :quantity)";
        SqlParameterSource menuOrderParameters = new MapSqlParameterSource()
                .addValue("order_id", orderId)
                .addValue("menu_id", orderMenu.getMenuId())
                .addValue("quantity", orderMenu.getQuantity());
        namedParameterJdbcTemplate.update(insertMenuOrderQuery, menuOrderParameters);

        // Option Insert

        String insertOrderMenuOptionQuery = "INSERT INTO ORDER_MENU_OPTION(ORDER_MENU_ID, OPTION_ID) VALUES(:order_id, :option_id)";
        for(int i = 0 ; i<optionList.length; i++){
            SqlParameterSource orderMenuOptionParameters = new MapSqlParameterSource()
                    .addValue("order_id",orderId)
                    .addValue("option_id",optionList[i]);
            namedParameterJdbcTemplate.update(insertOrderMenuOptionQuery,orderMenuOptionParameters);
        }

    }

    private RowMapper<Order> orderRowMapper () {
        return (rs, rowNum) ->
                Order.builder()
                     .orderTime(rs.getString("ORDER_TIME"))
                     .orderNumber(rs.getInt("ORDER_NUMBER"))
                     .build();
    }
  
    public List<ReceiptOrderNumberDto> getReceiptByOrderId(Integer orderId) {
        String sql = "SELECT o.order_number, m.name AS menu_name, om.quantity " +
            "FROM ORDERS AS o " +
            "JOIN ORDER_MENU AS om ON o.id = om.order_id " +
            "JOIN MENU AS m ON om.menu_id = m.id " +
            "WHERE o.id = " + orderId;
        return namedParameterJdbcTemplate.query(sql,(rs, rowNum) ->
            new ReceiptOrderNumberDto(rs.getInt("order_number"), rs.getString("menu_name"), rs.getInt("quantity")));
    }

	public Integer getOptionPrice(int menuId, int optionId) {
        String sql = "SELECT IFNULL(MAX(PRICE), 0) PRICE FROM OPTIONS WHERE ID = :optionId "
            + "AND (SELECT COUNT(OPTION_CATEGORY_ID) FROM OPTIONS "
            + "INNER JOIN MENU_OPTION ON OPTIONS.ID = MENU_OPTION.OPTION_ID "
            + "WHERE MENU_ID = :menuId AND OPTION_CATEGORY_ID = (SELECT OPTION_CATEGORY_ID FROM OPTIONS "
            + "INNER JOIN MENU_OPTION ON OPTIONS.ID = MENU_OPTION.OPTION_ID "
            + "WHERE  MENU_OPTION.MENU_ID = :menuId AND MENU_OPTION.OPTION_ID = :optionId)) > 1";
        SqlParameterSource param = new MapSqlParameterSource()
            .addValue("menuId", menuId)
            .addValue("optionId", optionId);
        return namedParameterJdbcTemplate.queryForObject(sql, param, Integer.class);
	}

    public Integer getMenuPrice(int menuId) {
        String sql = "SELECT PRICE FROM MENU WHERE ID = :menuId";
        SqlParameterSource param = new MapSqlParameterSource()
            .addValue("menuId", menuId);
        return namedParameterJdbcTemplate.queryForObject(sql, param, Integer.class);
    }
}
