package team6.codesquad.kiosk.order.controller.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class MenuDto {
	private int id;
	private String name;
	private int price;
	private List<String> options; //String으로 변경

}
