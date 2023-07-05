package team04.kioskbe.order.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


class PaymentTest {

    @ParameterizedTest
    @CsvSource({"CARD, CARD", "CASH, CASH"})
    @DisplayName("from(): 결제 방식과 일치하는 Payment를 반환한다.")
    void from(String type, Payment expected) {
        // given

        // when
        Payment payment = Payment.from(type);

        // then
        assertThat(payment).isEqualTo(expected);
    }

    @Test
    @DisplayName("getPayments(): 결제 방식 목록을 반환한다.")
    void getPayments() {
        // given

        // when
        List<Payment> payments = Payment.getPayments();

        // then
        assertThat(payments).containsExactlyInAnyOrder(Payment.CARD, Payment.CASH);
    }

}
