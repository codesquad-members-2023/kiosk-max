package team04.kioskbe.order.util;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import team04.kioskbe.domain.Option;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.OrderDrink;
import team04.kioskbe.order.domain.Payment;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class OrderRepositoryUtils {

    private static final String ID_COLUMN = "id";
    private static final String ORDER_ID_COLUMN = "order_id";
    private static final String DRINK_ID_COLUMN = "drink_id";
    private static final String PAYMENT_COLUMN = "payment";
    private static final String TOTAL_AMOUNT_COLUMN = "total_amount";
    private static final String RECEIVED_AMOUNT_COLUMN = "received_amount";
    private static final String QUANTITY_COLUMN = "quantity";
    private static final String ORDER_PRICE_COLUMN = "order_price";
    private static final String OPTION_ID_COLUMN = "option_id";
    private static final String ORDER_DRINK_ID_COLUMN = "order_drink_id";
    private static final String ORDER_DATE_COLUMN = "order_date";
    private static final String ORDER_TIME_COLUMN = "order_time";

    private OrderRepositoryUtils() {
        throw new IllegalStateException("Util class");
    }

    public static MapSqlParameterSource getOrderParamSource(final Order order) {
        return new MapSqlParameterSource(Map.of(PAYMENT_COLUMN, order.getPayment().name(), TOTAL_AMOUNT_COLUMN, order.getTotalAmount(), RECEIVED_AMOUNT_COLUMN, order.getReceivedAmount()));
    }

    public static MapSqlParameterSource getOrderDrinkParamSource(final long orderId, final OrderDrink drink) {
        return new MapSqlParameterSource(Map.of(ORDER_ID_COLUMN, orderId, DRINK_ID_COLUMN, drink.getDrinkId(), QUANTITY_COLUMN, drink.getQuantity(), ORDER_PRICE_COLUMN, drink.getOrderPrice()));
    }

    public static MapSqlParameterSource getOptionParamSource(final long orderDrinkId, final Long optionId) {
        return new MapSqlParameterSource(Map.of(OPTION_ID_COLUMN, optionId, ORDER_DRINK_ID_COLUMN, orderDrinkId));
    }

    public static RowMapper<Order> getOrderRowMapper() {
        return (resultSet, rowNumber) -> {
            long orderId = resultSet.getLong(ID_COLUMN);
            int totalAmount = resultSet.getInt(TOTAL_AMOUNT_COLUMN);
            int receivedAmount = resultSet.getInt(RECEIVED_AMOUNT_COLUMN);
            Payment payment = Payment.from(resultSet.getString(PAYMENT_COLUMN));
            LocalDate orderDate = resultSet.getDate(ORDER_DATE_COLUMN).toLocalDate();
            LocalTime orderTime = resultSet.getTime(ORDER_TIME_COLUMN).toLocalTime();

            List<Option> options = new ArrayList<>();
            long optionId = resultSet.getLong(OPTION_ID_COLUMN);
            String optionName = resultSet.getString("option_name");
            options.add(new Option(optionId, optionName));

            List<OrderDrink> orderDrinks = new ArrayList<>();
            long orderDrinkId = resultSet.getLong(ORDER_DRINK_ID_COLUMN);
            long drinkId = resultSet.getLong(DRINK_ID_COLUMN);
            String drinkName = resultSet.getString("drink_name");
            int quantity = resultSet.getInt(QUANTITY_COLUMN);
            int orderPrice = resultSet.getInt(ORDER_PRICE_COLUMN);
            orderDrinks.add(new OrderDrink(drinkId, drinkName, quantity, orderPrice, options));

            while (resultSet.next()) {
                long next = resultSet.getLong(ORDER_DRINK_ID_COLUMN);
                if (next == orderDrinkId) {
                    long otherOption = resultSet.getLong(OPTION_ID_COLUMN);
                    optionName = resultSet.getString("option_name");
                    options.add(new Option(otherOption, optionName));
                } else {
                    options = new ArrayList<>();
                    long otherOption = resultSet.getLong(OPTION_ID_COLUMN);
                    optionName = resultSet.getString("option_name");
                    options.add(new Option(otherOption, optionName));
                    orderDrinkId = resultSet.getLong(ORDER_DRINK_ID_COLUMN);
                    drinkId = resultSet.getLong(DRINK_ID_COLUMN);
                    drinkName = resultSet.getString("drink_name");
                    quantity = resultSet.getInt(QUANTITY_COLUMN);
                    orderPrice = resultSet.getInt(ORDER_PRICE_COLUMN);
                    orderDrinks.add(new OrderDrink(drinkId, drinkName, quantity, orderPrice, options));
                }
            }

            return new Order(orderId, totalAmount, receivedAmount, payment, orderDate, orderTime, orderDrinks);
        };
    }

}
