package team04.kioskbe.order.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicLong;

import static org.assertj.core.api.Assertions.assertThat;

class OrderSequenceTest {

    @Test
    @DisplayName("createDailyOrderId(): 같은 날짜의 주문 번호는 갱신된다.")
    void createDailyOrderIdWithSameDate() {
        // given
        OrderSequence orderSequence = new OrderSequence(new AtomicLong(4), LocalDate.now());

        // when
        long dailyOrderId = orderSequence.createDailyOrderId();

        // then
        assertThat(dailyOrderId).isEqualTo(5);
    }

    @Test
    @DisplayName("createDailyOrderId(): 다음 날로 넘어가면 주문 번호는 초기화된다.")
    void createDailyOrderId() {
        // given
        OrderSequence orderSequence = new OrderSequence(new AtomicLong(4), LocalDate.now().minusDays(1));

        // when
        long dailyOrderId = orderSequence.createDailyOrderId();

        // then
        assertThat(dailyOrderId).isEqualTo(1);
    }

}
