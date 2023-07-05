package team04.kioskbe.domain;

import java.util.List;

public class Drink {

    private Long id;
    private String name;
    private String img;
    private int price;
    private int totalQuantity;
    private Category category;
    private List<Option> options;

    private Drink(Builder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.img = builder.img;
        this.price = builder.price;
        this.category = builder.category;
        this.totalQuantity = builder.totalQuantity;
        this.options = builder.options;
    }

    public static Builder builder() {
        return new Builder();
    }

    public Drink() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImg() {
        return img;
    }

    public int getPrice() {
        return price;
    }

    public Category getCategory() {
        return category;
    }

    public List<Option> getOptions() {
        return options;
    }

    public int getTotalQuantity() {
        return totalQuantity;
    }

    public static class Builder {

        private Long id;
        private String name;
        private String img;
        private int price;
        private Category category;
        private int totalQuantity;
        private List<Option> options;

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder img(String img) {
            this.img = img;
            return this;
        }

        public Builder price(int price) {
            this.price = price;
            return this;
        }

        public Builder category(Category category) {
            this.category = category;
            return this;
        }

        public Builder totalQuantity(int totalQuantity) {
            this.totalQuantity = totalQuantity;
            return this;
        }

        public Builder options(List<Option> options) {
            this.options = options;
            return this;
        }

        public Drink build() {
            return new Drink(this);
        }
    }
}
