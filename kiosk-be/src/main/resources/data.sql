-- 커피
INSERT INTO drink(name, img, price, type) VALUES ('아메리카노', 'https://www.ediya.com/files/menu/IMG_1647320805422.png', 4000, 'coffee')
INSERT INTO drink(name, img, price, type) VALUES ('화이트 비엔나', 'https://ediya.com/files/menu/IMG_1647320860534.png', 4500, 'coffee')
INSERT INTO drink(name, img, price, type) VALUES ('카라멜 마끼아또', 'https://ediya.com/files/menu/IMG_1671585699141.png', 3000, 'coffee')
INSERT INTO drink(name, img, price, type) VALUES ('에스프레소', 'https://ediya.com/files/menu/IMG_1647320254869.png', 4500, 'coffee')

-- 라떼
INSERT INTO drink(name, img, price, type) VALUES ('카페라떼', 'https://ediya.com/files/menu/IMG_1671582054147.png', 3800, 'latte')
INSERT INTO drink(name, img, price, type) VALUES ('카푸치노', 'https://ediya.com/files/menu/IMG_1671582405654.png', 3500, 'latte')
INSERT INTO drink(name, img, price, type) VALUES ('카페모카', 'https://ediya.com/files/menu/IMG_1671586141487.png', 3800, 'latte')
INSERT INTO drink(name, img, price, type) VALUES ('달고나라떼', 'https://ediya.com/files/menu/IMG_1647321929656.png', 3200, 'latte')
INSERT INTO drink(name, img, price, type) VALUES ('넛츠크림라떼', 'https://ediya.com/files/menu/IMG_1671587873712.png', 3200, 'latte')
INSERT INTO drink(name, img, price, type) VALUES ('토피 카라멜 크림라떼', 'https://ediya.com/files/menu/IMG_1681089815512.png', 3200, 'latte')
INSERT INTO drink(name, img, price, type) VALUES ('녹차라떼', 'https://ediya.com/files/menu/IMG_1647321755481.png', 3200, 'latte')
INSERT INTO drink(name, img, price, type) VALUES ('고구마라떼', 'https://ediya.com/files/menu/IMG_1647322145592.png', 3200, 'latte')

-- 쥬스
INSERT INTO drink(name, img, price, type) VALUES ('딸기주스', 'https://ediya.com/files/menu/IMG_1647324249886.png', 4000, 'juice')
INSERT INTO drink(name, img, price, type) VALUES ('홍시주스', 'https://ediya.com/files/menu/IMG_1647324236558.png', 3500, 'juice')
INSERT INTO drink(name, img, price, type) VALUES ('골드키위주스', 'https://ediya.com/files/menu/IMG_1647324243707.png', 3800, 'juice')
INSERT INTO drink(name, img, price, type) VALUES ('생과일 수박주스', 'https://ediya.com/files/menu/IMG_1684299991102.png', 4200, 'juice')
INSERT INTO drink(name, img, price, type) VALUES ('살얼음 식혜', 'https://ediya.com/files/menu/IMG_1660608743501.png', 4200, 'juice')
INSERT INTO drink(name, img, price, type) VALUES ('레몬 에이드', 'https://ediya.com/files/menu/IMG_1647322413547.png', 4200, 'juice')
INSERT INTO drink(name, img, price, type) VALUES ('청포도 에이드', 'https://ediya.com/files/menu/IMG_1647322445174.png', 4200, 'juice')

-- 티
INSERT INTO drink(name, img, price, type) VALUES ('쌍화차', 'https://ediya.com/files/menu/IMG_1647322753151.png', 3000, 'tea')
INSERT INTO drink(name, img, price, type) VALUES ('생강차', 'https://ediya.com/files/menu/IMG_1647322669524.png', 3000, 'tea')
INSERT INTO drink(name, img, price, type) VALUES ('캐모마일', 'https://ediya.com/files/menu/IMG_1647322717592.png', 2500, 'tea')
INSERT INTO drink(name, img, price, type) VALUES ('얼그레이', 'https://ediya.com/files/menu/IMG_1647322847327.png', 3500, 'tea')
INSERT INTO drink(name, img, price, type) VALUES ('유자차', 'https://ediya.com/files/menu/IMG_1647323168645.png', 3000, 'tea')
INSERT INTO drink(name, img, price, type) VALUES ('자몽차', 'https://ediya.com/files/menu/IMG_1647323227736.png', 3000, 'tea')

-- 디카페인
INSERT INTO drink(name, img, price, type) VALUES ('디카페인 아메리카노', 'https://ediya.com/files/menu/IMG_1647320328440.png', 4500, 'decaffeine')
INSERT INTO drink(name, img, price, type) VALUES ('디카페인 라떼', 'https://ediya.com/files/menu/IMG_1647320345410.png', 5000, 'decaffeine')
INSERT INTO drink(name, img, price, type) VALUES ('디카페인 연유 라떼', 'https://ediya.com/files/menu/IMG_1647387558230.png', 3500, 'decaffeine')
INSERT INTO drink(name, img, price, type) VALUES ('디카페인 버블 흑당', 'https://ediya.com/files/menu/IMG_1647324449408.png', 5000, 'decaffeine')

-- 옵션 리스트
INSERT INTO drink_option(type, value) VALUES ('size', 'S')
INSERT INTO drink_option(type, value) VALUES ('size', 'M')
INSERT INTO drink_option(type, value) VALUES ('size', 'L')
INSERT INTO drink_option(type, value) VALUES ('temperature', 'Hot')
INSERT INTO drink_option(type, value) VALUES ('temperature', 'Ice')

-- 아메리카노
INSERT INTO available_option(drink_id, option_id) VALUES (1, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (1, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (1, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (1, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (1, 5)

-- 화이트 비엔나
INSERT INTO available_option(drink_id, option_id) VALUES (2, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (2, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (2, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (2, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (2, 5)

-- 카라멜 마끼아또
INSERT INTO available_option(drink_id, option_id) VALUES (3, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (3, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (3, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (3, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (3, 5)

-- 에스프레소
INSERT INTO available_option(drink_id, option_id) VALUES (4, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (4, 4)

-- 카페라떼
INSERT INTO available_option(drink_id, option_id) VALUES (5, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (5, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (5, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (5, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (5, 5)

-- 카푸치노
INSERT INTO available_option(drink_id, option_id) VALUES (6, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (6, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (6, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (6, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (6, 5)

-- 카페모카
INSERT INTO available_option(drink_id, option_id) VALUES (7, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (7, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (7, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (7, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (7, 5)

-- 달고나라떼
INSERT INTO available_option(drink_id, option_id) VALUES (8, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (8, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (8, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (8, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (8, 5)

-- 넛츠크림라떼
INSERT INTO available_option(drink_id, option_id) VALUES (9, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (9, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (9, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (9, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (9, 5)

-- 토피 카라멜 크림라떼
INSERT INTO available_option(drink_id, option_id) VALUES (10, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (10, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (10, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (10, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (10, 5)

-- 녹차라떼
INSERT INTO available_option(drink_id, option_id) VALUES (11, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (11, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (11, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (11, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (11, 5)

-- 고구마라떼
INSERT INTO available_option(drink_id, option_id) VALUES (12, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (12, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (12, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (12, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (12, 5)

-- 딸기주스
INSERT INTO available_option(drink_id, option_id) VALUES (13, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (13, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (13, 5)

-- 홍시주스
INSERT INTO available_option(drink_id, option_id) VALUES (14, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (14, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (14, 5)

-- 골드키위주스
INSERT INTO available_option(drink_id, option_id) VALUES (15, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (15, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (15, 5)

-- 생과일 수박주스
INSERT INTO available_option(drink_id, option_id) VALUES (16, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (16, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (16, 5)

-- 살얼음 식혜
INSERT INTO available_option(drink_id, option_id) VALUES (17, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (17, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (17, 5)

-- 레몬 에이드
INSERT INTO available_option(drink_id, option_id) VALUES (18, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (18, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (18, 5)

-- 청포도 에이드
INSERT INTO available_option(drink_id, option_id) VALUES (19, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (19, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (19, 5)

-- 쌍화차
INSERT INTO available_option(drink_id, option_id) VALUES (20, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (20, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (20, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (20, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (20, 5)

-- 생강차
INSERT INTO available_option(drink_id, option_id) VALUES (21, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (21, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (21, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (21, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (21, 5)

-- 캐모마일
INSERT INTO available_option(drink_id, option_id) VALUES (22, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (22, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (22, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (22, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (22, 5)

-- 얼그레이
INSERT INTO available_option(drink_id, option_id) VALUES (23, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (23, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (23, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (23, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (23, 5)

-- 유자차
INSERT INTO available_option(drink_id, option_id) VALUES (24, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (24, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (24, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (24, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (24, 5)

-- 자몽차
INSERT INTO available_option(drink_id, option_id) VALUES (25, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (25, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (25, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (25, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (25, 5)

-- 디카페인
-- 디카페인 아메리카노
INSERT INTO available_option(drink_id, option_id) VALUES (26, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (26, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (26, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (26, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (26, 5)

-- 디카페인 라떼
INSERT INTO available_option(drink_id, option_id) VALUES (27, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (27, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (27, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (27, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (27, 5)

-- 디카페인 연유 라떼
INSERT INTO available_option(drink_id, option_id) VALUES (28, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (28, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (28, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (28, 4)
INSERT INTO available_option(drink_id, option_id) VALUES (28, 5)

-- 디카페인 버블 흑당
INSERT INTO available_option(drink_id, option_id) VALUES (29, 1)
INSERT INTO available_option(drink_id, option_id) VALUES (29, 2)
INSERT INTO available_option(drink_id, option_id) VALUES (29, 3)
INSERT INTO available_option(drink_id, option_id) VALUES (29, 5)
