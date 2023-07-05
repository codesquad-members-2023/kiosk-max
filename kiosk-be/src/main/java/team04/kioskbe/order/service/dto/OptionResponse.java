package team04.kioskbe.order.service.dto;

import team04.kioskbe.domain.Option;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class OptionResponse {

    private String name;

    public OptionResponse(final String name) {
        this.name = name;
    }

    public static List<OptionResponse> of(final List<Option> options) {
        return options.stream().map(option -> new OptionResponse(option.getValue())).collect(Collectors.toList());
    }

    public String getName() {
        return name;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final OptionResponse that = (OptionResponse) o;
        return Objects.equals(getName(), that.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getName());
    }
}
