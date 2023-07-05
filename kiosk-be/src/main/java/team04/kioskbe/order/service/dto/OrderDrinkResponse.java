package team04.kioskbe.order.service.dto;

import team04.kioskbe.order.domain.OrderDrink;

import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

public class OrderDrinkResponse {

    private int index;
    private String name;
    private int quantity;
    private List<OptionResponse> optionResponses;

    public OrderDrinkResponse(int index, final String name, final int quantity, final List<OptionResponse> optionResponses) {
        this.index = index;
        this.name = name;
        this.quantity = quantity;
        this.optionResponses = optionResponses;
    }

    public OrderDrinkResponse() {
    }

    public static List<OrderDrinkResponse> of(List<OrderDrink> drinks) {
        AtomicInteger index = new AtomicInteger();
        return drinks.stream().map((OrderDrink orderDrink) -> from(orderDrink, index.incrementAndGet())).collect(Collectors.toUnmodifiableList());
    }

    public static OrderDrinkResponse from(OrderDrink orderDrink, int index) {
        return new OrderDrinkResponse(index, orderDrink.getName(), orderDrink.getQuantity(), OptionResponse.of(orderDrink.getOptions()));
    }

    public int getIndex() {
        return index;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public List<String> getOptionResponses() {
        return optionResponses.stream()
                .map(OptionResponse::getName)
                .collect(Collectors.toList());
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final OrderDrinkResponse that = (OrderDrinkResponse) o;
        return index == that.index && getQuantity() == that.getQuantity() && Objects.equals(getName(), that.getName()) && Objects.equals(getOptionResponses(), that.getOptionResponses());
    }

    @Override
    public int hashCode() {
        return Objects.hash(index, getName(), getQuantity(), getOptionResponses());
    }
}
