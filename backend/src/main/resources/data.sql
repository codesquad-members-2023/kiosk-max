-- category
INSERT INTO `category`(name)
VALUES ('커피'),
       ('라떼'),
       ('티'),
       ('쥬스'),
       ('디카페인');

-- menu
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('아메리카노', '4000', '이미지', '1');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('카페모카', '4500', '이미지', '1');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('에스프레소', '3000', '이미지', '1');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('콜드브루', '3500', '이미지', '1');

INSERT INTO `menu`(name, price, image, category_id)
VALUES ('카페라떼', '4000', '이미지', '2');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('바닐라라떼', '4500', '이미지', '2');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('오곡라떼', '3000', '이미지', '2');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('고구마라떼', '3500', '이미지', '2');

INSERT INTO `menu`(name, price, image, category_id)
VALUES ('녹차', '4000', '이미지', '3');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('페퍼민트', '4500', '이미지', '3');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('우롱차', '3000', '이미지', '3');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('캐모마일', '3500', '이미지', '3');

INSERT INTO `menu`(name, price, image, category_id)
VALUES ('오렌지쥬스', '4000', '이미지', '4');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('포도쥬스', '4500', '이미지', '4');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('키위쥬스', '3000', '이미지', '4');
INSERT INTO `menu`(name, price, image, category_id)
VALUES ('사과쥬스', '3500', '이미지', '4');

INSERT INTO `menu`(name, price, image, category_id)
VALUES ('아메리카노(디카프)', '3500', '이미지', '5');
