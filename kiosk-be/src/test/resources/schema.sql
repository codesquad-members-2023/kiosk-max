drop table if exists available_option;

drop table if exists drink_choice;

drop table if exists drink_option;

drop table if exists order_drink;

drop table if exists drink;

drop table if exists order_info;

CREATE TABLE drink_option
(
    id    BIGINT PRIMARY KEY AUTO_INCREMENT,
    type  VARCHAR(20) NOT NULL,
    value VARCHAR(20) NOT NULL
);

CREATE TABLE drink
(
    id    BIGINT PRIMARY KEY AUTO_INCREMENT,
    name  VARCHAR(20)  NOT NULL,
    img   VARCHAR(255) NOT NULL,
    price INTEGER      NOT NULL,
    type  VARCHAR(20)  NOT NULL
);

CREATE TABLE available_option
(
    drink_id  BIGINT NOT NULL,
    option_id BIGINT NOT NULL,
    FOREIGN KEY (drink_id) REFERENCES drink (id),
    FOREIGN KEY (option_id) REFERENCES drink_option (id)
);

CREATE TABLE order_info
(
    id              BIGINT PRIMARY KEY AUTO_INCREMENT,
    payment    VARCHAR(20) NOT NULL,
    total_amount    INTEGER     NOT NULL,
    received_amount INTEGER     NOT NULL,
    order_date      DATE DEFAULT (CURRENT_DATE),
    order_time      TIME DEFAULT (CURRENT_TIME)
);

CREATE TABLE order_drink
(
    id          BIGINT PRIMARY KEY AUTO_INCREMENT,
    order_id    BIGINT  NOT NULL,
    drink_id    BIGINT  NOT NULL,
    quantity    INTEGER NOT NULL,
    order_price INTEGER NOT NULL,
    FOREIGN KEY (drink_id) REFERENCES drink (id),
    FOREIGN KEY (order_id) REFERENCES order_info (id)
);

CREATE TABLE drink_choice
(
    order_drink_id BIGINT NOT NULL,
    option_id      BIGINT NOT NULL,
    FOREIGN KEY (order_drink_id) REFERENCES order_drink (id),
    FOREIGN KEY (option_id) REFERENCES drink_option (id)
);
