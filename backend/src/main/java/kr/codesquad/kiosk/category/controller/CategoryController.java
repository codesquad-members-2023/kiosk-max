package kr.codesquad.kiosk.category.controller;

import kr.codesquad.kiosk.category.controller.dto.response.CategoryItemsResponse;
import kr.codesquad.kiosk.category.controller.dto.response.CategoryResponse;
import kr.codesquad.kiosk.category.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/categories")
public class CategoryController {
	private final CategoryService categoryService;

	@GetMapping
	public ResponseEntity<List<CategoryResponse>> showCategories() {
		return ResponseEntity.ok().body(categoryService.getAllCategories());
	}

	@GetMapping("/{categoryId}")
	public ResponseEntity<CategoryItemsResponse> getCategoryItems(@PathVariable Integer categoryId) {
		return ResponseEntity.ok().body(categoryService.getCategoryItems(categoryId));
	}
}
