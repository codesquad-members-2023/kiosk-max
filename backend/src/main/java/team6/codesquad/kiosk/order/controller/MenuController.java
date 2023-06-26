package team6.codesquad.kiosk.order.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import team6.codesquad.kiosk.order.dto.response.CategoryResponseDto;
import team6.codesquad.kiosk.order.service.MenuService;

@RestController
@RequiredArgsConstructor
public class MenuController {
	private final MenuService menuService;

	@GetMapping("/")
	public List<CategoryResponseDto> getMenuList() {
		return menuService.getCategories();
	}
}
