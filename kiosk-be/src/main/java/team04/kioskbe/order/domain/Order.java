package team04.kioskbe.order.domain;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class Order {

    private Long id;
    private final int totalAmount;
    private final int receivedAmount;
    private final Payment payment;
    private LocalDate orderDate;
    private LocalTime orderTime;
    private final List<OrderDrink> drinks;

    public Order(int totalAmount, int receivedAmount, Payment payment, List<OrderDrink> drinks) {
        this.totalAmount = totalAmount;
        this.receivedAmount = receivedAmount;
        this.payment = payment;
        this.drinks = drinks;
    }

    public Order(final Long id, final int totalAmount, final int receivedAmount, final Payment payment, final LocalDate orderDate, final LocalTime orderTime, List<OrderDrink> drinks) {
        this.id = id;
        this.totalAmount = totalAmount;
        this.receivedAmount = receivedAmount;
        this.payment = payment;
        this.orderDate = orderDate;
        this.orderTime = orderTime;
        this.drinks = drinks;
    }

    public Long getId() {
        return id;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public int getReceivedAmount() {
        return receivedAmount;
    }

    public Payment getPayment() {
        return payment;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public LocalTime getOrderTime() {
        return orderTime;
    }

    public List<OrderDrink> getDrinks() {
        return drinks;
    }

}
