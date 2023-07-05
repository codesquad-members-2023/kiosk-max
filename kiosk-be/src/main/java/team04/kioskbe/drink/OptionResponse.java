package team04.kioskbe.drink;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class OptionResponse {
    private final String type;
    private final List<OptionValue> values;

    public OptionResponse(String type, List<OptionValue> values) {
        this.type = type;
        this.values = values;
    }

    public static List<OptionResponse> valueOf(Map<String, List<OptionValue>> optionMap) {
        return optionMap.entrySet().stream()
                .map(entry -> new OptionResponse(entry.getKey(), entry.getValue()))
                .collect(Collectors.toList());
    }

    public String getType() {
        return type;
    }

    public List<OptionValue> getValues() {
        return values;
    }
}
