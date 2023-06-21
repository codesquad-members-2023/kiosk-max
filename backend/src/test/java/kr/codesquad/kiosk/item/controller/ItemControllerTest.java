package kr.codesquad.kiosk.item.controller;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import kr.codesquad.kiosk.fixture.FixtureFactory;
import kr.codesquad.kiosk.item.controller.dto.response.ItemDetailsResponse;
import kr.codesquad.kiosk.item.service.ItemService;

@WebMvcTest(controllers = ItemController.class)
class ItemControllerTest {

	@Autowired
	MockMvc mockMvc;

	@MockBean
	ItemService itemService;

	@DisplayName("아이템 아이디로 아이템 하나의 세부 항목을 조회할 수 있다.")
	@Test
	void givenItemId_whenGetItemDetails_thenResponse200OK() throws Exception {
		// given
		int itemId = 1;
		ItemDetailsResponse response = FixtureFactory.createItemDetailsResponse();
		when(itemService.getItemDetails(itemId)).thenReturn(response);

		// when & then
		mockMvc.perform(
				get("/api/categories/1/items/" + itemId)
			)
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.id").value(response.id()));
	}
}

