package team6.codesquad.kiosk.order.domain;

import lombok.Getter;

@Getter
public class Menu {
    private int id;
    private String name;
    private int categoryId;
    private int price;
    private String image;
}
