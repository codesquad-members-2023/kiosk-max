package team04.kioskbe.drink;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DrinkController {

    private final DrinkService drinkService;

    public DrinkController(DrinkService drinkService) {
        this.drinkService = drinkService;
    }

    @GetMapping("/drinks/categories")
    public List<CategoryResponse> getCategories() {
        return drinkService.getCategories();
    }

    @GetMapping("/drinks")
    public List<DrinkResponse> getDrinks(@RequestParam(value = "type") String category){
        return drinkService.getDrinks(category);
    }
}
