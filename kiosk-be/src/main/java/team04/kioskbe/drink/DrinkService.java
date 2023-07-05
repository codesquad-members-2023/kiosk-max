package team04.kioskbe.drink;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DrinkService {
    private final DrinkRepository drinkRepository;

    public DrinkService(DrinkRepository drinkRepository) {
        this.drinkRepository = drinkRepository;
    }

    public List<CategoryResponse> getCategories() {
        return CategoryResponse.getCategories();
    }

    public List<DrinkResponse> getDrinks(String category) {
        return drinkRepository.findByCategory(category).stream()
                .map(DrinkResponse::from)
                .collect(Collectors.toList());
    }
}
