package team04.kioskbe.order.domain;

import team04.kioskbe.domain.Option;

import java.util.List;
import java.util.Objects;

public class OrderDrink {

    private Long id;
    private Long orderId;
    private Long drinkId;
    private String name;
    private int quantity;
    private int orderPrice;
    private List<Option> options;

    public OrderDrink() {
    }

    public OrderDrink(final Long drinkId, String name, final int quantity, final int orderPrice, final List<Option> options) {
        this.drinkId = drinkId;
        this.name = name;
        this.quantity = quantity;
        this.orderPrice = orderPrice;
        this.options = options;
    }

    public Long getId() {
        return id;
    }

    public Long getOrderId() {
        return orderId;
    }

    public String getName() {
        return name;
    }

    public Long getDrinkId() {
        return drinkId;
    }

    public int getQuantity() {
        return quantity;
    }

    public int getOrderPrice() {
        return orderPrice;
    }

    public List<Option> getOptions() {
        return options;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final OrderDrink that = (OrderDrink) o;
        return getQuantity() == that.getQuantity() && getOrderPrice() == that.getOrderPrice() && Objects.equals(getId(), that.getId()) && Objects.equals(getOrderId(), that.getOrderId()) && Objects.equals(getDrinkId(), that.getDrinkId()) && Objects.equals(getName(), that.getName()) && Objects.equals(getOptions(), that.getOptions());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getOrderId(), getDrinkId(), getName(), getQuantity(), getOrderPrice(), getOptions());
    }
}
