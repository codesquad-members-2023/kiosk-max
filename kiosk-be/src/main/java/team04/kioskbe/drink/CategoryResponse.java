package team04.kioskbe.drink;

import team04.kioskbe.domain.Category;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class CategoryResponse {
    private final String id;
    private final String name;

    public CategoryResponse(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public static List<CategoryResponse> getCategories(){
        return Arrays.stream(Category.values())
                .map(category -> new CategoryResponse(category.getId(), category.getName()))
                .collect(Collectors.toList());
    }
}
