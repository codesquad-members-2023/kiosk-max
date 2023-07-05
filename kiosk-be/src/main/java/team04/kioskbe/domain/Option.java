package team04.kioskbe.domain;

import java.util.Objects;

public class Option {

    private Long id;
    private String type;
    private String value;

    public Option(Long id, String type, String value) {
        this.id = id;
        this.type = type;
        this.value = value;
    }

    public Option() {
    }

    public Option(final Long id, final String value) {
        this.id = id;
        this.value = value;
    }

    public Long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getValue() {
        return value;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public void setType(final String type) {
        this.type = type;
    }

    public void setValue(final String value) {
        this.value = value;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final Option option = (Option) o;
        return Objects.equals(getId(), option.getId()) && Objects.equals(getType(), option.getType()) && Objects.equals(getValue(), option.getValue());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getType(), getValue());
    }
}
