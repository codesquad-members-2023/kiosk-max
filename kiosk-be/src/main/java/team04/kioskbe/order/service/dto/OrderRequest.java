package team04.kioskbe.order.service.dto;

import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.OrderDrink;
import team04.kioskbe.order.domain.Payment;

import java.util.List;

public class OrderRequest {

    private int totalAmount;
    private int receivedAmount;
    private String payment;
    private List<OrderDrink> drinks;

    public OrderRequest() {

    }

    public OrderRequest(final int totalAmount, final int receivedAmount, String payment, final List<OrderDrink> drinks) {
        this.totalAmount = totalAmount;
        this.receivedAmount = receivedAmount;
        this.payment = payment;
        this.drinks = drinks;
    }

    public Order toEntity() {
        return new Order(totalAmount, receivedAmount, Payment.from(payment), drinks);
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public int getReceivedAmount() {
        return receivedAmount;
    }

    public String getPayment() {
        return payment;
    }

    public List<OrderDrink> getDrinks() {
        return drinks;
    }
}
