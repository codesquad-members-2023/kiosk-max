package kr.codesquad.kiosk.item.controller.dto.response;

import kr.codesquad.kiosk.item.domain.Options;

public record OptionsResponse(
	int id,
	String text
) {
	public static OptionsResponse from(Options options) {
		return new OptionsResponse(
			options.getId(),
			options.getName()
		);
	}
}
