package kr.codesquad.kiosk.category.controller.dto.response;

import kr.codesquad.kiosk.category.controller.dto.ItemResponse;

import java.util.List;

public record CategoryItemsResponse(
		List<ItemResponse> items
) {
}
