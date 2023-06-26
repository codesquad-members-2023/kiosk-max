package team6.codesquad.kiosk.order.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MenuResponseDto {

	private int id;
	private String name;
	private int price;
	private String image;
	private int categoryId;

}
