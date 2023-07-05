package team04.kioskbe.order.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.List;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Payment {

    CARD("카드결제", "https://img.freepik.com/free-vector/illustration-of-credit-card-icon_53876-5915.jpg?[…]3b1df4f63876ff621f90c2d6750adf20b9209e929a0e50a5419d772c04c52"),
    CASH("현금결제", "https://img.freepik.com/free-vector/dollar_53876-25498.jpg?w=826&t=st=1687795207~exp[…]2a959568589883270360017b770e1af4444a4e403802eb88cfc880a6ef2d9");

    private final String name;
    private final String img;

    Payment(String name, String img) {
        this.name = name;
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public String getImg() {
        return img;
    }

    public static Payment from(String type) {
        return type.equals(CARD.name()) ? CARD : CASH;
    }

    // TODO: 유연하게 변경할 수 있을까?
    public static List<Payment> getPayments() {
        return List.of(CARD, CASH);
    }

}
