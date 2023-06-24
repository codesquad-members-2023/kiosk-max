package kr.codesquad.kiosk.category.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import kr.codesquad.kiosk.category.dto.response.CategoryResponse;
import kr.codesquad.kiosk.category.repository.CategoryRepository;
import kr.codesquad.kiosk.exception.BusinessException;
import kr.codesquad.kiosk.exception.ErrorCode;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CategoryService {
	private final CategoryRepository categoryRepository;

	public List<CategoryResponse> getAllCategories() {
		List<CategoryResponse> categories = categoryRepository.findAll()
			.stream()
			.map(category -> CategoryResponse.from(category.getId(), category.getName()))
			.collect(Collectors.toList());

		if(categories.isEmpty()) {
			throw new BusinessException(ErrorCode.DATABASE_CONNECTION_FAILED);
		}

		return categories;
	}
}
