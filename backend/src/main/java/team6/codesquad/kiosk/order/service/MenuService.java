package team6.codesquad.kiosk.order.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import team6.codesquad.kiosk.order.dto.response.CategoryResponseDto;
import team6.codesquad.kiosk.order.repository.MenuRepository;

@RequiredArgsConstructor
@Transactional
@Service
public class MenuService {
	private final MenuRepository menuRepository;

	public List<CategoryResponseDto> getCategories() {
		return menuRepository.findAll();
	}

}
