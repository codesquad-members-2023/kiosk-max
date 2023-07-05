package team04.kioskbe.drink;

public class OptionValue {
    private final long id;
    private final String value;

    public OptionValue(long id, String value) {
        this.id = id;
        this.value = value;
    }

    public long getId() {
        return id;
    }

    public String getValue() {
        return value;
    }
}
