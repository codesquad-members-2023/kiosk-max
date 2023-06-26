package team6.codesquad.kiosk.order.controller.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {

	private List<MenuDto> menus;
	private String paymentType; // 지불 방법
	private int receivedAmount;  // 결제 한 금액
	private int totalAmount; // 총 내야 할 금액

}


