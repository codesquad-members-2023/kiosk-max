package kr.codesquad.kiosk.domain;

import lombok.Getter;

@Getter
public class Item {
	private int id;
	private String name;
	private int price;
	private String image;
	private int categoryId;
}
